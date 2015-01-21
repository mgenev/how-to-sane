var easyimg = require('easyimage');
var fs = require('fs');

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

            var fileName, destDir;

            var str = uploadedFiles[0].fd;
            fileName = str.substr(str.lastIndexOf('/') + 1, str.length - str.lastIndexOf('/'));
            destDir = str.substr(0, str.lastIndexOf('/'))

            console.log(' FILENAME ', fileName);
            console.log(' DESTDIR ', destDir);

            // todo put thumb at end of file after this works
            thumbPath = path + '/thumbs/' + fileName;

            record.filePath = path + '/' + fileName;
            record.thumbPath = thumbPath;

            if (!fs.existsSync(destDir + '/thumbs')) {
                fs.mkdirSync(destDir + '/thumbs');
            }

            easyimg.thumbnail({
                src: uploadedFiles[0].fd,
                dst: destDir + '/thumbs/' + fileName,
                width: 300,
                height: 300
            }).then(
                function(image) {
                    console.log('THE IMAGE RETURNED ' + JSON.stringify(image));
                },
                function(err) {
                    console.log(err);
                }
            );

            Photo.create(record).exec(function(err, photo) {
                return res.json({
                    photo: photo
                });
            });
        });
    }
};
