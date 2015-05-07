import Ember from 'ember';

var get = Ember.get,
    set = Ember.set;

export default Ember.Object.extend(Ember.Evented, {

    url: null,
    paramNamespace: null,
    paramName: 'file',

    /**
     * ajax request type (method), by default it will be POST
     *
     * @property type
     */
    type: 'POST',

    upload(files, record) {
        var data;
        var url = get(this, 'url');
        var type = get(this, 'type');

        set(this, 'isUploading', true);
        $.each(files, (index, value) => {

            data = this.setupFormData(value, record);
            this.ajax(url, data, type).then((respData) => {
                this.didUpload(respData);
            });
        });
    },

    setupFormData(file, extra) {
        var formData = new FormData();

        for (var prop in extra) {
            if (extra.hasOwnProperty(prop)) {
                formData.append(this.toNamespacedParam(prop), extra[prop]);
            }
        }

        formData.append(this.toNamespacedParam(this.paramName), file);

        return formData;
    },

    toNamespacedParam(name) {
        if (this.paramNamespace) {
            return this.paramNamespace + '[' + name + ']';
        }

        return name;
    },

    didUpload(data) {
        set(this, 'isUploading', false);

        this.trigger('didUpload', data);
    },

    didProgress(e) {
        e.percent = e.loaded / e.total * 100;
        this.trigger('progress', e);
    },

    ajax(url, data, method) {
        var settings = {
            url,
            type: method || 'POST',
            contentType: false,
            processData: false,
            xhr: () => {
                var xhr = Ember.$.ajaxSettings.xhr();
                xhr.upload.onprogress = (e) => {
                    this.didProgress(e);
                };
                return xhr;
            },
            data
        };

        return this._ajax(settings);
    },

    _ajax: function(settings) {
        return new Ember.RSVP.Promise(function(resolve, reject) {
            settings.success = function(data) {
                Ember.run(null, resolve, data);
            };

            settings.error = function(jqXHR, textStatus, errorThrown) {
                Ember.run(null, reject, jqXHR);
            };

            Ember.$.ajax(settings);
        });
    }
});
