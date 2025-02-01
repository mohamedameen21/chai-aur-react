function customRender(reactElemnt, container) {
    const domElement = document.createElement(reactElemnt.type);
    domElement.innerHTML = reactElemnt.children;

    Object.keys(reactElemnt.props).forEach((prop) => {
        domElement.setAttribute(prop, reactElemnt.props[prop]);
    });

    // domElement.setAttribute('href', reactElemnt.props.href);
    // domElement.setAttribute('target', reactElemnt.props.target);

    container.appendChild(domElement);
}

const reactElemnt = {
    type: 'a',
    props: {
        href: 'http://google.com',
        target: '_blank',
    },
    children: 'Click me',
};

const mainContiner = document.querySelector('#root');

customRender(reactElemnt, mainContiner)


