import Ember from 'ember';
import DroppableMixin from 'client/mixins/droppable';

const { computed } = Ember;
export default Ember.Component.extend(DroppableMixin, {

    files: [],
    progress: '',

    filesPresent: computed('files.length', function() {
        return `You have ${this.get('files.length')} file(s) ready to upload.`;
    }).readOnly(),

    total: 0,

    // expand this module so that it waits
    uploadFiles() {
        var uploaded = 0;
        var files = this.get('files');
        var total = this.get('total') + files.length;

        this.set('total', total);

        var uploader = this.fileUploader;
        uploader.url = this.get('url');
        uploader.paramName = 'upload';

        var uploadRecord = {};
        uploadRecord[this.get('type')] = JSON.stringify(this.get('record')._attributes);

        if (!Ember.isEmpty(files)) {
            uploader.upload(files, uploadRecord);
        }

        // uploader.on('progress', function(e) {
        // Handle progress changes
        // Use `e.percent` to get percentag

        // TODO this no longer makes sense till i can make individual file progress bars
        // $('.upload-progress').html(e.percent + '%');
        // });

        uploader.on('didUpload', (e) => {
            // Handle finished upload
            uploaded++;

            console.log('total down', total);
            console.log(e);

            this.set('progress', `Upload ${uploaded} of ${total} finished`);
            this.set('files', []);
        });
    },

    drop(e) {
        e.stopPropagation(); // Stops some browsers from redirecting.
        e.preventDefault();

        var files = e.dataTransfer.files;
        this.set('files', files);
    },

    actions: {
        upload() {
            this.uploadFiles();
        }
    }

});
