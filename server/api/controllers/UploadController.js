var actionUtil = require('../blueprints/_util/actionUtil');

module.exports = {
    upload: function(req, res) {
        // var record = JSON.parse(req.body.record);
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

        var file = req.file('upload');

        // TODO: in the future add user /uploads/:userId/photos/
        var path = '/uploads/photos/'

        // make the model
        // e.g. :
        // var photo = new Photo etc
        // var name = req.body.name;
        // var tags = req.body.tags;

        // in case of multi file uploads, save each one and then insert into db and index
        // then they are discoverable by date or tag which you can preset for the upload 
        // in the UI's form, or discover by timestamp or key word even
        // 


        file.upload(function(err, uploadedFiles) {
            if (err) return res.send(500, err);

            // in case of multi file uploads, save each one and then insert into db and index
            // then they are discoverable by date or tag which you can preset for the upload 
            // in the UI's form, or discover by timestamp or key word even
            // 

            // if file exists, add a -1 to its name or something

            // Sample upload object from skipper
            // [{
            //     "fd": "/Users/martin.genev/Projects/vida-libre-main/server/uploads/e2e09ddb-7907-423d-b2b6-1009f0bf7395.jpg",
            //     "size": 58373,
            //     "type": "image/jpeg",
            //     "filename": "MartinGenev2.jpg",
            //     "status": "bufferingOrWriting",
            //     "field": "upload"
            // }]

            uploadedFiles.forEach(function(photo) {
                fs.rename(photo.fd, path + photo.filename, function(err) {
                    if (err) throw err;

                    // TODO save model
                    // e.g. :
                    // photo.name = name;
                    // photo.path = path + photo.filename;
                    // photo.tags = tags;
                    // photo.user = session.user;

                    // photo.save().then(s => res.ok(s);)

                    console.log('renamed complete');
                });
            });

            return res.json({
                message: uploadedFiles.length + ' file(s) uploaded successfully!',
                files: uploadedFiles
            });
        });
    }
};
