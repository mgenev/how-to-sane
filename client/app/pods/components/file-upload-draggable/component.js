import Ember from 'ember';
import DroppableMixin from 'client/mixins/droppable';

export default Ember.Component.extend(DroppableMixin, {

    files: [],
    progress: '',

    filesPresent: function() {
        return 'You have ' + this.get('files').length + ' file(s) ready to upload.';
    }.property('files'),

    total: 0,

    // expand this module so that it waits
    uploadFiles: function() {
        var uploaded = 0;
        var files = this.get('files');

        console.log('files', files);

        var total = this.get('total') + files.length;
        this.set('total', total);

        console.log('TOTAL up ', total);

        var uploader = this.fileUploader;
        uploader.url = this.get('url');
        uploader.paramName = 'upload';

        var uploadRecord = {};
        uploadRecord[this.get('type')] = this.get('record')._attributes;

        console.log('THE RECORD', uploadRecord);

        if (!Ember.isEmpty(files)) {
            uploader.upload(files, uploadRecord);
        }

        // uploader.on('progress', function(e) {            
        // Handle progress changes
        // Use `e.percent` to get percentag

        // TODO this no longer makes sense till i can make individual file progress bars
        // $('.upload-progress').html(e.percent + '%');
        // });

        var _this = this;
        uploader.on('didUpload', function(e) {
            // Handle finished upload
            uploaded++;

            console.log('total down', total);
            console.log(e);

            _this.set('progress', 'Upload ' + uploaded + ' of ' + total + ' finished');
            _this.set('files', []);
        });
    },

    drop: function(e) {
        e.stopPropagation(); // Stops some browsers from redirecting.
        e.preventDefault();

        var files = e.dataTransfer.files;
        this.set('files', files);
    },

    actions: {
        upload: function() {
            this.uploadFiles();
        }
    }

});
