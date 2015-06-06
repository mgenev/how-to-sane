var gm = require('gm');
var fs = require('fs');
var _ = require('nimble');

module.exports = {
    upload: function(req, res) {
        var file = req.file('file_data');

        file.upload({
            dirname: '../../uploads/' + req.user.email
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
        var record = {};
        record.album = req.body.albumId;
        record.name = req.body.name;
        record.user = req.user.id;

        var file = req.file('file_data');
        var path = '/images/users/' + req.user.email + '/photos';

        file.upload({
            dirname: '../../assets' + path
        }, function(err, uploadedFiles) {

            if (err) return res.send(500, err);

            var fileName, destDir;

            var str = uploadedFiles[0].fd;
            fileName = str.substr(str.lastIndexOf('/') + 1, str.length - str.lastIndexOf('/'));
            destDir = str.substr(0, str.lastIndexOf('/'));

            // todo put thumb at end of file after this works

            record.filePath = path + '/' + fileName;
            record.thumbPath = path + '/thumbs/' + fileName;

            if (!fs.existsSync(destDir + '/thumbs')) {
                fs.mkdirSync(destDir + '/thumbs');
            }

            _.series([
                function(callback) {
                    // Resize thumb, preserve dimensions
                    gm(uploadedFiles[0].fd)
                        .resize(300 + '>')
                        .gravity('Center')
                        .write(destDir + '/thumbs/' + fileName, function(error) {
                            if (error) res.send(500, error);

                            callback();
                        });
                },
                function(callback) {
                    // Resize main
                    gm(uploadedFiles[0].fd)
                        .resize(1024 + '>')
                        .gravity('Center')
                        .write(uploadedFiles[0].fd, function(error) {
                            if (error) res.send(500, error);
                            callback();
                        });

                },
                function(callback) {
                    // Resize main
                    Photo.create(record).exec(function(err, photo) {
                        return res.json({
                            photo: photo
                        });
                    });
                }
            ]);
        });
    }
};

resizePhoto = function(photo, path, width) {
    gm(photo)
        .resize(width)
        .write(root + '/public/img/uploads/' + name, function(err) {
            if (err) console.log('gm error', err);
        });
};
