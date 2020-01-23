import React from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
// import { TransformControls } from 'three-transformcontrols';
// var TransformControls = require('three-transformcontrols');
// var controls = new TransformControls(camera, domElement);
// import * as THREE from 'three';
var OBJLoader = require('three-obj-loader');
var MTLLoader = require('three-mtl-loader');
var THREE = require('three');
var OrbitControls = require('three-orbit-controls')(THREE);

OBJLoader(THREE);
// MTLLoader(THREE);

// var myOBJ 




function mapStateToProps(state) {
  return {
    height: state.configurator.height,
    width: state.configurator.width,
    depth: state.configurator.depth,
    colour: state.configurator.colour
  }
}

class Viewer extends React.Component {

  componentDidMount() {
    console.log(this.props)
    this.sceneSetup();
    console.log("scene")
    this.addCustomSceneObjects();
    console.log("custom objects")
    this.startAnimationLoop();
    console.log("animate")
    this.setControls();
    this.loadObject();
    console.log("object Load")
  }

  componentDidUpdate() {

    this.updateScale()
    // this.loadObject()

  }

  sceneSetup = () => {
    const width = this.el.clientWidth;
    const height = 500;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75, // fov = field of view
      width / height, // aspect ratio
      0.1, // near plane
      1000*10 // far plane
    );

    // set some distance from a cube that is located at z = 0
    this.camera.position.x = 0;
    this.camera.position.y = 0;
    this.camera.position.z = 50;

      this.camera.aspect = (width/height);
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(width, height);
    this.el.appendChild(this.renderer.domElement); // mount using React ref
    // let controls = new OrbitControls(this.camera, this.el);
    // controls.width = width;
    // controls.height = height;
    // controls.update();

    // function resizeRendererToDisplaySize(renderer) {
    //   const canvas = renderer.domElement;
    //   const width = canvas.clientWidth
    //   const height = canvas.clientHeight
    //   const needResize = canvas.width !== width || canvas.height !== height
    //   if (needResize)
    //   {
    //     renderer.setSize(width, height, false)
    //   }
    // }

  }


  addCustomSceneObjects = () => {

    

    
   
    

    const lights = [];
    lights[0] = new THREE.PointLight(0xffffff, 1, 0);
    lights[1] = new THREE.PointLight(0xffffff, 1, 0);
    lights[2] = new THREE.PointLight(0xffffff, 1, 0);

    lights[0].position.set(0, 2000, 0);
    lights[1].position.set(1000, 2000, 1000);
    lights[2].position.set(- 1000, - 2000, - 1000);

    this.scene.add(lights[0]);
    this.scene.add(lights[1]);
    this.scene.add(lights[2]);

    
    



    // objLoader.object.scale.x = this.props.height
    // objLoader.parse(object)


    // this.geometry.attributes.position.needsUpdate = true;


  }
  setControls = () => {
    let controls = new OrbitControls(this.camera, this.el);
    controls.width = this.el.clientWidth;
    controls.height = 500;
    controls.update();

    
  }

  updateScale = () => {
    console.log(this.myOBJ);

    this.myOBJ.scale.x = this.props.width

    this.myOBJ.scale.y = this.props.height
    this.myOBJ.scale.z = this.props.depth

    switch (this.props.colour) {
      case "Natural":
        this.colourValue = 0xabc123
        break

      case "Black":

        this.colourValue = 0xffd537

        break
      case "White":

        this.colourValue = 0xa6a6a6

        break
      default: this.colourValue = 0xa6a6a6
        
    }

    this.myOBJ.material.forEach((item) => {
          item.color.setHex(this.colourValue)
        });
  }

  

  loadObject = () => {





    const scene = this.scene
    
   

    // let mtlLoader = new MTLLoader();
    
    // mtlLoader.setTexturePath('./2020 Jan Kylie Dillon Bookcase')
    // mtlLoader.setPath('/assets/');
    // mtlLoader.load('2020 Jan Kylie Dillon Bookcase.mtl', (materials) => {
    //   console.log(`materials: ${materials}`)
    //   materials.preload();
      let objLoader = new THREE.OBJLoader()
      // objLoader.setMaterials(material);
      console.log(objLoader)
      objLoader.setPath('./')
      objLoader.load('./shelf-model.obj', (object) => {
        // object = object.children[0]
        
        scene.add(object);
        object.scale.set(this.props.height/100, this.props.width/100, this.props.depth/100);
        
        this.myOBJ = object.children[0];  
        object.children[0].material.forEach((item) => 
        {
          item.color.setHex(0xadf111)  
        } );
        
       

 
        console.log(`myOBJ:${this.myOBJ}`);
        console.log(object);
      });
    // });
    

    //   var objLoader = new THREE.OBJLoader();
    //   // objLoader.setMaterials(materials);
    //   objLoader.setPath('../src');
    //   objLoader.load('./2020 Jan Kylie Dillon Bookcase.obj', function (object) {

    //     scene.add(object);
    //     object.scale.set(2, .5, .5);

    //   });

    // // });

    // const objLoader = new THREE.OBJLoader()
    // objLoader.load( './src/2020 Jan Kylie Dillon Bookcase.obj', (object) =>
    // {
    //   scene.add(object);
    //   console.log(`object:${object}`);
    //   object.scale.set(2, .5, .5)
    // });
  }

 resizeRendererToDisplaySize = (renderer) => {
    const canvas = this.renderer.domElement;
    const width = canvas.clientWidth
    const height = canvas.clientHeight
    const needResize = canvas.width !== width || canvas.height !== height
    if (needResize)
    {
      renderer.setSize(width, height, false)
    }
  }

  startAnimationLoop = () => {
    
    this.renderer.render(this.scene, this.camera);
    this.requestID = window.requestAnimationFrame(this.startAnimationLoop);
    this.resizeRendererToDisplaySize(this.renderer);
  }



  render() {
    return (    
    <div className="viewer" ref={ref => (this.el = ref)} />
    );
  }
}

export default connect(mapStateToProps)(Viewer)