var config = require('../config/db')
var pg = require('pg'),
    dateTime = require('node-datetime'),
    dt = dateTime.create();
    formattimes = dt.format('Y-m-d H:M:S');

var configDB = config.config
var qsUploadInfo = config.queryString.uploadInfo
var qsServiceSent = config.queryString.servicesent
var pool = new pg.Pool(configDB);


module.exports = {
    uploadInfo: function (options) {
        pool.connect(function (err, client, done) {
            if (err) {
                console.log("not able to get connection: " + err);
            }
            client.query(qsUploadInfo,[options.uploader, options.datetimestamp, options.filename, options.err_msg]);
            done()
        })
    },
    serviceSent:function(options){
        pool.connect(function (err, client, done) {
            if (err) {
                console.log("not able to get connection: " + err);
            }
            client.query(qsServiceSent,[options.uploaded, options.ref, options.err_msg]);
            done()
        })
    }
}