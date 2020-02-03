import React from 'react';
// import { render } from 'react-dom';
import { connect } from 'react-redux';
import productsList from '../../productsList';
// import { TransformControls } from 'three-transformcontrols';
// var TransformControls = require('three-transformcontrols');
// var controls = new TransformControls(camera, domElement);
// import * as THREE from 'three';
var OBJLoader = require('three-obj-loader');
var MTLLoader = require('three-mtl-loader');
var THREE = require('three');
var OrbitControls = require('three-orbit-controls')(THREE);
let myOBJ;
OBJLoader(THREE);
// MTLLoader(THREE);

function mapStateToProps(state) {
  // console.log('viewer', state);
  return {
    height: state.configurator.height,
    width: state.configurator.width,
    depth: state.configurator.depth,
    colour: state.configurator.colour
  };
}

class Viewer extends React.Component {
  // createOBJ = (x) => {
  //   const myOBJ
  //   myOBJ.bind(x)
  // };

  // setDefaultConfig = example => {
  //   // let example = e

  //   let exampleConfig = {
  //     newHeight: example.configuration.height,
  //     newWidth: example.configuration.width,
  //     newDepth: example.configuration.depth,
  //     newColour: example.configuration.colour
  //   };

  //   console.log(example.configuration.height);
  //   this.props.dispatch({ type: 'SET_DEFAULTS', exampleConfig });

  // };

  getDefaultsfromID = e => {
    var example;

    productsList.forEach(i => {
      if (i.id === e) {
        example = i;
        // console.log(`handle Click2 ${JSON.stringify(example)}`);
        return example;
      }
    });

    let exampleConfig = {
      newHeight: example.configuration.height,
      newWidth: example.configuration.width,
      newDepth: example.configuration.depth,
      newColour: example.configuration.colour
    };
    this.props.dispatch({ type: 'SET_DEFAULTS', exampleConfig });

    // this.setDefaultConfig(example);
  };

  componentDidMount() {
    // this.createOBJ();
    // this.getDefaultsfromID(4);

    this.sceneSetup();

    this.addCustomSceneObjects();

    this.startAnimationLoop();

    this.setControls();

    this.loadObject();
    // console.log('object Loaded');
  }

  componentDidUpdate() {
    this.updateScale();
    // this.loadObject()
  }

  sceneSetup = () => {
    const width = this.el.clientWidth;
    const height = 500;
    console.log(this);
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xffffff);
    this.camera = new THREE.PerspectiveCamera(
      75, // fov = field of view
      width / height, // aspect ratio
      0.1, // near plane
      1000 * 10 // far plane
    );

    // set some distance from a cube that is located at z = 0
    this.camera.position.x = 0;
    this.camera.position.y = 0;
    this.camera.position.z = 27;

    this.camera.aspect = width / height;
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(width, height);
    // this.renderer.setClearColor(0x000000, 1);
    // this.renderer.shadowMapEnabled = true;
    // this.renderer.shadowMapType = THREE.PCFSoftShadowMap;

    this.el.appendChild(this.renderer.domElement); // mount using React ref
  };

  addCustomSceneObjects = () => {
    const lights = [];
    lights[0] = new THREE.PointLight(0xffffff, 1, 0);
    lights[1] = new THREE.PointLight(0xffffff, 1, 0);
    lights[2] = new THREE.PointLight(0xffffff, 1, 0);

    lights[0].position.set(0, 2000, 0);
    lights[1].position.set(1000, 2000, 1000);
    lights[2].position.set(-1000, -2000, -1000);
    // lights[0].shadowCameraVisible = true;
    // lights[0].castShadow = true;
    // lights[1].castShadow = true;
    // lights[2].castShadow = true;

    this.scene.add(lights[0]);
    this.scene.add(lights[1]);
    this.scene.add(lights[2]);

//     var geometry = new THREE.PlaneGeometry((10, 10, 50, 50));
//     var material = new THREE.MeshBasicMaterial({
//       color: 0xffff00,
//       side: THREE.DoubleSide
//     });
//     this.plane = new THREE.Mesh(geometry, material);
// this.scene.add(this.plane);

//     this.plane.rotateX(1.57);
//     this.plane.translateZ(this.props.height * 10)
//     this.plane.position((0,0,this.props.height* 10)) 
    
    // .setRotation([180,0,0])
  };
  setControls = () => {
    let controls = new OrbitControls(this.camera, this.el);
    controls.width = this.el.clientWidth;
    controls.height = 500;
    controls.update();
  };

  updateScale = () => {
    // this.plane.translateZ(this.props.height * 10)
    myOBJ = this.myOBJ;
    //these are coming back as undefined myOBJ - I wanna use a .bind somewhere.
    console.log(myOBJ);
    myOBJ.scale.x = this.props.width / 100;

    myOBJ.scale.y = this.props.height / 100;
    myOBJ.scale.z = this.props.depth / 100;

    switch (this.props.colour) {
      case 'Natural':
        this.colourValue = 0xe6c49c;
        break;

      case 'Black':
        this.colourValue = 0x2d2f30;

        break;
      case 'White':
        this.colourValue = 0xd9d6d2;

        break;
      default:
        this.colourValue = 0x2d2f30;
    }

    myOBJ.children.forEach(item => {
      item.material.color.setHex(this.colourValue);
    });
    myOBJ.children[1].material.color.setHex(0xe6c49c);
      myOBJ.children[2].material.color.setHex(0xe6c49c);
      myOBJ.children[3].material.color.setHex(0xe6c49c);
  };

  loadObject = () => {
    // console.log('LOADING');

    const scene = this.scene;
    // let mtlLoader = new MTLLoader();
    // // mtlLoader.setTexturePath('./2020 Jan Kylie Dillon Bookcase')
    // mtlLoader.setPath('/');
    // mtlLoader.load('./cabinet.sample.mtl', (materials) => {
    //   console.log(`materials: ${materials}`)
    //   materials.preload();
    let objLoader = new THREE.OBJLoader();

    myOBJ = this.myOBJ;

    objLoader.setPath('/');
    objLoader.load('./shelf-model-no-plane.obj', object => {
      scene.add(object);
      object.scale.set(
        this.props.height / 100,
        this.props.width / 100,
        this.props.depth / 100
      );
      // console.log('object', object);
      // console.log(this.props.height);
      // object.castShadow = true;
      // object.receiveShadow =true;
      this.myOBJ = object;

      object.children.forEach(item => {
        item.material.color.setHex(0x2d2f30);
      });

      object.children[1].material.color.setHex(0xe6c49c);
      object.children[2].material.color.setHex(0xe6c49c);
      object.children[3].material.color.setHex(0xe6c49c);

      // console.log(`myOBJ:${JSON.stringify(this.myOBJ)}`);
      // console.log(object);
    });
    // console.log(myOBJ)

    // })
  };

  resizeRendererToDisplaySize = renderer => {
    const canvas = this.renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
  };

  startAnimationLoop = () => {
    this.renderer.render(this.scene, this.camera);
    this.requestID = window.requestAnimationFrame(this.startAnimationLoop);
    this.resizeRendererToDisplaySize(this.renderer);
  };

  render() {
    return <div className="viewer" ref={ref => (this.el = ref)} />;
  }
}

export default connect(mapStateToProps)(Viewer);
