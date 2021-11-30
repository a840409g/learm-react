const component = require.context('.', true, /.tsx$/);

component.keys().forEach(file => {
    const fileName = file.replace(/^\.\/(.*)\.\w+$/, '$1').split('/').shift();
    const requiredFile = component(file).default;

    module.exports[fileName] = requiredFile;
});