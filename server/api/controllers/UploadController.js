var actionUtil = require('../blueprints/_util/actionUtil');

module.exports = {
    upload: function(req, res) {
        var file = req.file('file_data');

        file.upload({
            dirname: '../../uploads/' + req.user.username
        }, function(err, uploadedFiles) {
            if (err) return res.send(500, err);
            return res.json({
                message: uploadedFiles.length + ' file(s) uploaded successfully!',
                files: uploadedFiles
            });
        });
    },
    homepageTemplate: function(req, res) {

        // TODO user name should be part of  the folder when we have users

        var record = JSON.parse(req.body.template);
        var file = req.file('upload');

        // var originalFileName = file._files[0].stream.filename;

        file.upload({
            dirname: '../../uploads'
        }, function(err, uploadedFiles) {
            if (err) return res.send(500, err);

            record.filePath = uploadedFiles[0].fd;

            Template.create(record).exec(function(err, newTemplate) {
                return res.json({
                    template: newTemplate
                });
            });
        });
    },
    photo: function(req, res) {

        var record = JSON.parse(req.body.extra);
        record.user = req.user.id;

        var file = req.file('file_data');
        var path = '/images/users/' + req.user.username + '/photos';

        file.upload({
            dirname: '../../assets' + path
        }, function(err, uploadedFiles) {

            if (err) return res.send(500, err);

            var str = uploadedFiles[0].fd;            
            str = str.substr(str.lastIndexOf('/'), str.length - str.lastIndexOf('/') ); 
            record.filePath = path + str;

            Photo.create(record).exec(function(err, photo) {
                return res.json({
                    photo: photo
                });
            });
        });
    }
};
