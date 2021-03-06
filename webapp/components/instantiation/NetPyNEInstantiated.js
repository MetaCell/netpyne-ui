import React, { createRef } from 'react';
import ReactDOM from 'react-dom'
import Canvas from '@geppettoengine/geppetto-client/js/components/interface/3dCanvas/Canvas';
import ControlPanel from 'geppetto-client/js/components/interface/controlPanel/controlpanel';

import { NetWorkControlButtons } from 'netpyne/components'
import { primaryColor } from '../../theme'


export default class NetPyNEInstantiated extends React.Component {
  
  constructor (props) {
    super(props);
    this.state = {
      model: props.model,
      controlPanelHidden: true,
      bringItToFront: 0,
      update: 0
    };
    this.dimensions = { width: 200, height: 200 }
    this.canvasRef = createRef();    
  }

  componentDidUpdate (){
    this.resizeIfNeeded()
  }


  componentDidMount () {
    this.canvasRef.current.engine.setLinesThreshold(10000);
    this.canvasRef.current.displayAllInstances();
    this.canvasRef.current.setBackgroundColor('transparent')

    window.addEventListener('resize', this.delayedResize.bind(this))
    this.resizeIfNeeded()
    this.updateInstances()

    GEPPETTO.on(GEPPETTO.Events.Control_panel_close, () => {
      this.setState({ bringItToFront: 0 })
    });
  }

  componentWillUnmount (){
    GEPPETTO.off(GEPPETTO.Events.Control_panel_close)
    clearTimeout(this.timer)
    window.removeEventListener('resize', this.delayedResize)
  }

  updateInstances () {
    if (Instances.network) {
      // update canvas only if there are instances to show
      this.canvasRef.current.engine.setLinesThreshold(25000)
      this.canvasRef.current.engine.updateSceneWithNewInstances(window.Instances);
      this.canvasRef.current.resetCamera()

      this.canvasRef.current.setColor('network', primaryColor, true)
      const spotLight = this.canvasRef.current.engine.scene.children.find(child => child.type === "SpotLight")
      if (spotLight) {
        this.canvasRef.current.engine.scene.remove(spotLight)
      }
      

    }
  }

  resizeCanvas () {
    this.setState({ update: this.state.update++ })
  }

  resizeIfNeeded (){
    const dimensions = this.getParentSize()
    if (dimensions !== false && this.wasParentResized(dimensions)) {
      this.dimensions = dimensions
      this.resizeCanvas()
    }
  }
  
  wasParentResized (dimensions) {
    return dimensions.width !== this.dimensions.width || dimensions.height !== this.dimensions.height
  }

  delayedResize () {
    this.timer = setTimeout(() => this.resizeIfNeeded(), 100)
  }

  getParentSize () {
    if (this.canvasRef.current === null) {
      return false
    }
    const node = ReactDOM.findDOMNode(this)
    return node.parentNode.getBoundingClientRect()
  }

  render () {
    const { update } = this.state;

    
    return (
      <div className="instantiatedContainer" >
          
        <Canvas
          id="CanvasContainer"
          name="Canvas"
          componentType='Canvas'
          ref={this.canvasRef}
          style={{ height: '100%', width: '100%', backgroundColor: 'transparent' }}
          update={update}
        />
        <div id="controlpanel" style={{ top: 0 }}>
          <ControlPanel
            icon={null}
            useBuiltInFilters={false}
          >
          </ControlPanel>
        </div>

        <NetWorkControlButtons/>
      </div>

    );
  }
}