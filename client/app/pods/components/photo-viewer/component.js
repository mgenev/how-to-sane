// component photo-viewer
import Ember from 'ember';

export default Ember.Component.extend({

    keyDown: function(event) {
        // escape 
        if (event.keyCode === 27) {
            this.send('closeViewer', this.get('currentPhoto'));
        }
        // right arrow
        if (event.keyCode === 39) {
            this.send('forward', this.get('currentPhoto'));
        }

        // left arrow
        if (event.keyCode === 37) {
            this.send('backwards', this.get('currentPhoto'));
        }

    },

    didInsertElement: function() {
        //fix for catching key events
        this.$().attr('tabindex', 0);
        this.$().focus();

        this.setViewerHeight();
        $('.photo').imagesLoaded(function() {
            $('.full-size-photo-viewer').css('opacity', 1);
        });

        var self = this;
        $(window).resize(function() {
            self.setViewerHeight();
        });

        var modal = $('#modalDialog');
        // TODO: Check to see if we need to cleanup this on event upon destroy
        modal.on('hidden.bs.modal', function() {
            self.send('closeViewer');
        });
    },

    setViewerHeight: function() {
        var height = $(window).height() - 50;
        $('.photo').height(height);
        $('.side-panel').height(height);
    },

    getPhotoIdList: function() {

        var photos = this.get('photos');
        if (!Ember.isEmpty(photos)) {
            return photos.map(function(record) {
                return record.get('id');
            });
        }
        return [];
    },

    getNextId: function(direction, model) {

        var currentId = model.get('id');

        var photoIdList = this.getPhotoIdList();
        var currentIdIndex = photoIdList.indexOf(currentId);
        var nextId;

        if (direction === 'forward') {
            if (currentIdIndex + 1 === photoIdList.length) {
                nextId = photoIdList[0];
            } else {
                nextId = photoIdList[currentIdIndex + 1];
            }
        } else if (direction === 'backwards') {
            if (currentIdIndex === 0) {
                nextId = photoIdList[photoIdList.length - 1];
            } else {
                nextId = photoIdList[currentIdIndex - 1];
            }
        }

        return nextId;
    },

    actions: {
        forward: function(photoId) {
            this.sendAction('nextPhoto', this.getNextId('forward', photoId));
        },
        backwards: function(photoId) {
            this.sendAction('nextPhoto', this.getNextId('backwards', photoId));
        },
        closeViewer: function(album) {
            this.sendAction('closeViewer');
        },
        closeModal: function() {
            this.sendAction('closeModal');
        }
    },
});
