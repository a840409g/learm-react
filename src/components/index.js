const file = require.context('.', true, /.tsx$/);

const components = file.keys().reduce((root, key) => {
    const fileName = key.replace(/^\.\/(.*)\.\w+$/, '$1').split('/').shift();
    const requiredFile = file(key).default;

    root[fileName] = requiredFile;

    return root;
}, {});

export default components;