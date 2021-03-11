import {IInputs, IOutputs} from "./generated/ManifestTypes";
import DataSetInterfaces = ComponentFramework.PropertyHelper.DataSetApi;
type DataSet = ComponentFramework.PropertyTypes.DataSet;
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import FormComponent from "./components/form";
import { FieldForm } from "./utilities/interfaces";



export class pcfstandardview implements ComponentFramework.StandardControl<IInputs, IOutputs> {
	container: HTMLDivElement;
	context: ComponentFramework.Context<IInputs>;

	/**
	 * Empty constructor.
	 */
	constructor()
	{

	}

	/**
	 * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.
	 * Data-set values are not initialized here, use updateView.
	 * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.
	 * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.
	 * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.
	 * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.
	 */
	public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container:HTMLDivElement)
	{
		// Add control initialization code
		this.container = container;
		this.context = context;
	}


	/**
	 * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
	 * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
	 */
	public updateView(context: ComponentFramework.Context<IInputs>): void
	{
		// Add code to update control view
		const dataset = this.context.parameters.dataset;
		const columns = dataset.columns;
<<<<<<< Updated upstream
		const records = dataset.records;
		
=======
		// Obtener los registros en un array
		const record = Object.values(dataset.records)[0];
		let arrayFields: FieldForm[] = [];
		for(const column of columns) {
			const name = column.name;
			const displayName = column.displayName;
			const dataType = column.dataType;
			const fieldForm: FieldForm = { DataType: dataType, DisplayName: displayName, Name: name} ;
			arrayFields.push(fieldForm);
		}

		ReactDOM.render(React.createElement(FormComponent, {arrayFields, record}), this.container);
>>>>>>> Stashed changes
	}

	/** 
	 * It is called by the framework prior to a control receiving new data. 
	 * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”
	 */
	public getOutputs(): IOutputs
	{
		return {};
	}

	/** 
	 * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
	 * i.e. cancelling any pending remote calls, removing listeners, etc.
	 */
	public destroy(): void
	{
		// Add code to cleanup control if necessary
	}

}