const config = {
    title: 'TrackAddict',
    meta: [
        {
            'charset': 'utf-8',
        },
        {
            'http-equiv': 'X-UA-Compatible',
            'content': 'IE=edge'
        },
        {
            'name': 'description',
            'content': ''
        },
    ],
    link: [
        {
            'rel': 'stylesheet',
            'href': 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css',
            'integrity': 'sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7',
            'crossorigin'='anonymous'
        }
    ],
    script: [
        {
            'src': 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js',
            'integrity'="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS",
            'crossorigin'="anonymous"
        },
        {
            'src': './client.js',
            'type': 'text/javascript'
        }
    ]
}

export default config;
