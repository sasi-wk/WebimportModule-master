module.exports = {
    connect:"postgres://postgres:postgres@localhost/webImport",
    config:{
        user: 'postgres',
        database: 'webImport',
        password: 'postgres',
        port: 5432,
        max: 10, // max number of connection can be open to database
        idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
    },
    queryString:{
        servicesent:'INSERT INTO service_sent(uploaded,ref,err_msg) VALUES($1,$2,$3)',
        uploadInfo:'INSERT INTO uploaded(uploader,uploaded,filename,err_msg) VALUES($1,$2,$3,$4)',
        getUploadinfo:'SELECT uploaded.uploader,uploaded.uploaded,uploaded.filename,(SELECT count(err_msg) FROM service_sent WHERE uploaded.uploaded = service_sent.uploaded AND service_sent.err_msg is not null  GROUP BY uploaded.uploaded)AS False,(SELECT count(uploaded) FROM service_sent  WHERE uploaded.uploaded = service_sent.uploaded AND service_sent.err_msg IS NULL  GROUP BY uploaded.uploaded)AS Pass,(SELECT (SELECT count(uploaded) FROM service_sent WHERE uploaded.uploaded = service_sent.uploaded AND service_sent.err_msg IS NULL GROUP BY uploaded.uploaded)+(SELECT count(err_msg)FROM service_sent WHERE uploaded.uploaded = service_sent.uploaded AND service_sent.err_msg is not null GROUP BY uploaded.uploaded)) AS Total FROM uploaded;',
        getErrifo:'SELECT uploaded, ref, err_msg FROM service_sent where err_msg is not null AND uploaded =($1)'
    }
}