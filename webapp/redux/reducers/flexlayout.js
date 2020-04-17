import { 
  ADD_WIDGET,
  UPDATE_WIDGET,
  RESET_LAYOUT,
  DESTROY_WIDGET,
  ACTIVATE_WIDGET,
  SWITCH_LAYOUT
} from '../actions/flexlayout';

import { MODEL_LOADED } from '../actions/general';
import { WidgetStatus } from '../../constants';


function removeUndefined (obj) {
  return Object.keys(obj).forEach(key => obj[key] === undefined ? delete obj[key] : '');
}

export const PYTHON_CONSOLE_WIDGET = { 
  id: 'python', 
  name: 'Python', 
  status: WidgetStatus.ACTIVE, 
  icon: 'fa fa-code',
  component: 'PythonConsole', 
  panelName: "consolePanel",
  enableClose: true,
  enableDrag: true,
  enableRename: false,
  pos: 100
};

export const PLOTS_WIDGETS = {
  connectionPlot: {
    id: 'connectionPlot', 
    name: 'Connections Plot', 
    status: WidgetStatus.ACTIVE, 
    icon: 'fa fa-dot-circle-o',
    component: 'Plot', 
    panelName: "plotPanel",
    enableRename: false,
    method: {
      plotMethod: 'plotConn', 
      plotType: false
    }
  },
  d2NetPlot: {
    id: 'd2NetPlot', 
    name: '2D Net Plot', 
    status: WidgetStatus.ACTIVE, 
    icon: 'fa fa-dot-circle-o',
    component: 'Plot', 
    panelName: "plotPanel",
    enableRename: false,
    method: {
      plotMethod: 'plot2Dnet', 
      plotType: false
    }
  },
  shapePlot: {
    id: 'shapePlot', 
    name: 'Shape Plot', 
    status: WidgetStatus.ACTIVE, 
    icon: 'fa fa-dot-circle-o',
    component: 'Plot', 
    panelName: "plotPanel",
    enableRename: false,
    method: {
      plotMethod: 'plotShape', 
      plotType: false
    }
  },
  tracesPlot: {
    id: 'tracesPlot', 
    name: 'Cell traces', 
    status: WidgetStatus.ACTIVE, 
    icon: 'fa fa-dot-circle-o',
    component: 'Plot', 
    panelName: "plotPanel",
    enableRename: false,
    method: {
      plotMethod: 'plotTraces', 
      plotType: false
    }
  },
  rasterPlot: {
    id: 'rasterPlot', 
    name: 'Raster plot', 
    status: WidgetStatus.ACTIVE, 
    icon: 'fa fa-dot-circle-o',
    component: 'Plot', 
    panelName: "plotPanel",
    enableRename: false,
    method: {
      plotMethod: 'plotRaster', 
      plotType: false
    }
  },
  spikePlot: {
    id: 'spikePlot', 
    name: 'Spike Hist Plot', 
    status: WidgetStatus.ACTIVE, 
    icon: 'fa fa-dot-circle-o',
    component: 'Plot', 
    panelName: "plotPanel",
    enableRename: false,
    method: {
      plotMethod: 'plotSpikeHist', 
      plotType: false
    }
  },
  spikeStatsPlot: {
    id: 'spikeStatsPlot', 
    name: 'Spike Stats Plot', 
    status: WidgetStatus.ACTIVE, 
    icon: 'fa fa-dot-circle-o',
    component: 'Plot', 
    panelName: "plotPanel",
    enableRename: false,
    method: {
      plotMethod: 'plotSpikeStats', 
      plotType: false
    }
  },
  ratePSDPlot: {
    id: 'ratePSDPlot', 
    name: 'Rate PSD Plot', 
    status: WidgetStatus.ACTIVE, 
    icon: 'fa fa-dot-circle-o',
    component: 'Plot', 
    panelName: "plotPanel",
    enableRename: false,
    method: {
      plotMethod: 'plotRatePSD', 
      plotType: false
    }
  },
  LFPTimeSeriesPlot: {
    id: 'LFPTimeSeriesPlot', 
    name: 'LFP Time Series Plot', 
    status: WidgetStatus.ACTIVE, 
    icon: 'fa fa-dot-circle-o',
    component: 'Plot', 
    panelName: "plotPanel",
    enableRename: false,
    method: {
      plotMethod: 'plotLFP',
      plotType: 'timeSeries'
    }
  },
  LFPLocationsPlot: {
    id: 'LFPLocationsPlot', 
    name: 'LFP PSD Plot', 
    status: WidgetStatus.ACTIVE, 
    icon: 'fa fa-dot-circle-o',
    component: 'Plot', 
    panelName: "plotPanel",
    enableRename: false,
    method: {
      plotMethod: 'plotLFP',
      plotType: 'PSD'
    }
  },
  LFPSpectrogramPlot: {
    id: 'LFPSpectrogramPlot', 
    name: 'LFP Spectrogram Plot', 
    status: WidgetStatus.ACTIVE, 
    icon: 'fa fa-dot-circle-o',
    component: 'Plot', 
    panelName: "plotPanel",
    enableRename: false,
    method: {
      plotMethod: 'plotLFP',
      plotType: 'spectrogram'
    }
  },
  LFPLocationsPlot2: {
    id: 'LFPLocationsPlot2', 
    name: 'LFP Locations Plot', 
    status: WidgetStatus.ACTIVE, 
    icon: 'fa fa-dot-circle-o',
    component: 'Plot', 
    panelName: "plotPanel",
    enableRename: false,
    method: {
      plotMethod: 'plotLFP',
      plotType: 'locations'
    }
  },
  grangerPlot: {
    id: 'grangerPlot', 
    name: 'Granger Plot', 
    status: WidgetStatus.ACTIVE, 
    icon: 'fa fa-dot-circle-o',
    component: 'Plot', 
    panelName: "plotPanel",
    enableRename: false,
    method: {
      plotMethod: 'granger',
      plotType: false
    }
  },
  rxdConcentrationPlot: {
    id: 'rxdConcentrationPlot',
    name: 'RxD concentration plot',
    status: WidgetStatus.ACTIVE, 
    icon: 'fa fa-dot-circle-o',
    component: 'Plot',
    panelName: "plotPanel",
    enableRename: false,
    method: {
      plotMethod: 'plotRxDConcentration',
      plotType: false
    }
  }
}


export const MORPHOLOGY_WIDGET = {
  id: 'D3Canvas', 
  name: 'Morphology', 
  status: WidgetStatus.ACTIVE, 
  icon: 'fa fa-dot-circle-o',
  component: 'D3Canvas', 
  panelName: "morphoPanel",
  enableRename: false
}

export const HLS_WIDGETS = {
  'popParams': { 
    id: 'popParams', 
    name: 'Populations', 
    status: WidgetStatus.ACTIVE, 
    icon: 'fa fa-dot-circle-o',
    component: 'popParams', 
    panelName: "hlsPanel",
    enableRename: false,
    pos: 0
  },
  'cellParams': { 
    id: 'cellParams', 
    name: 'Cell rules', 
    status: WidgetStatus.HIDDEN, 
    icon: 'fa fa-dot-circle-o',
    component: 'cellParams', 
    panelName: "hlsPanel",
    enableRename: false,
    pos: 1
  },
  'synMechParams': { 
    id: 'synMechParams', 
    name: 'Synapses', 
    status: WidgetStatus.HIDDEN, 
    icon: 'fa fa-dot-circle-o',
    component: 'synMechParams', 
    panelName: "hlsPanel",
    enableRename: false,
    pos: 2
  },
  'connParams': { 
    id: 'connParams', 
    name: 'Connections', 
    status: WidgetStatus.HIDDEN, 
    icon: 'fa fa-dot-circle-o',
    component: 'connParams', 
    panelName: "hlsPanel",
    enableRename: false,
    pos: 3
  },
  'stimSourceParams': { 
    id: 'stimSourceParams', 
    name: 'Stim. sources', 
    status: WidgetStatus.HIDDEN, 
    icon: 'fa fa-dot-circle-o',
    component: 'stimSourceParams', 
    panelName: "hlsPanel",
    enableRename: false,
    pos: 4
  },
  'stimTargetParams': { 
    id: 'stimTargetParams',
    name: 'Stim. targets',
    status: WidgetStatus.HIDDEN, 
    icon: 'fa fa-dot-circle-o',
    component: 'stimTargetParams',
    panelName: "hlsPanel",
    enableRename: false,
    pos: 5
  },
  'simConfig': { 
    id: 'simConfig', 
    name: 'Settings', 
    status: WidgetStatus.HIDDEN, 
    icon: 'fa fa-dot-circle-o',
    component: 'simConfig', 
    panelName: "hlsPanel",
    enableRename: false,
    pos: 6
  },
  'analysis': { 
    id: 'analysis', 
    name: 'Analysis', 
    status: WidgetStatus.HIDDEN, 
    icon: 'fa fa-dot-circle-o',
    component: 'analysis', 
    panelName: "hlsPanel",
    enableRename: false,
    pos: 7
  }
  

}

export const FLEXLAYOUT_DEFAULT_STATE = { 
  // 'python': PYTHON_CONSOLE_WIDGET 
  widgets: {},
  widgetsBackground: {
    'D3Canvas': MORPHOLOGY_WIDGET,
    // 'python': PYTHON_CONSOLE_WIDGET,
  }
};


export default (state = FLEXLAYOUT_DEFAULT_STATE, action) => {
  if (action.data) {
    removeUndefined(action.data); // Prevent deletion in case of unpolished update action
  }
  
  switch (action.type) {
    
  case ADD_WIDGET:
  case UPDATE_WIDGET: { 
    const newWidget = { ...state.widgets[action.data.id], panelName: extractPanelName(action), ...action.data };
    return {
      ...state, widgets: { 
        ...updateWidgetState(state.widgets, newWidget), 
        [action.data.id]: newWidget 
      }
    } ;
  }

  case DESTROY_WIDGET:{
    const newWidgets = { ...state.widgets };
    delete newWidgets[action.data.id];
    return { ...state, widgets: newWidgets };
  }

  case ACTIVATE_WIDGET: { 
    const activatedWidget = state.widgets[action.data.id];
    
    return {
      ...state, widgets: { 
        ...activateWidget(state.widgets, activatedWidget.panelName), 
        [action.data.id]: { ...activatedWidget, status: WidgetStatus.ACTIVE }
      }
    }
  }

  case RESET_LAYOUT:
    return FLEXLAYOUT_DEFAULT_STATE;

  case MODEL_LOADED: 
    return { ...state, widgets: { ...HLS_WIDGETS, ...state.widgets } }
  
  case SWITCH_LAYOUT: {
    const { widgets, widgetsBackground, ...others } = state
    return { ...others, widgets: { ...widgetsBackground }, widgetsBackground: { ...widgets } }
  }
    
  
  default:
    return state
  }
}

function filterWidgets (widgets, filterFn) {
  return Object.fromEntries(Object.values(widgets).filter(filterFn));
}

/**
 * Ensure there is one only active widget in the same panel
 * @param {*} widgets 
 * @param {*} param1 
 */
function updateWidgetState (widgets, { status, panelName }) {
  if (status != WidgetStatus.ACTIVE) {
    return widgets;
  }
  return Object.fromEntries(Object.values(widgets).filter(widget => widget).map(widget => [
    widget.id,
    {
      ...widget,
      status: widget.panelName == panelName ? WidgetStatus.HIDDEN : widget.status
    }
  ]));
}

function extractPanelName (action) {
  return action.data.component == "Plot" ? "bottomPanel" : "leftPanel";
}


function activateWidget ( widgets, panelName) {
  const newWidgets = {}
  Object.values(widgets).forEach(widget => {
    newWidgets[widget.id] = { ...widget }
    if (widget.panelName === panelName) {
      newWidgets[widget.id].status = WidgetStatus.HIDDEN
    }
  })
  return newWidgets
}