import { runInThisContext } from "vm";
import {IInputs, IOutputs} from "./generated/ManifestTypes";
import DataSetInterfaces = ComponentFramework.PropertyHelper.DataSetApi;
type DataSet = ComponentFramework.PropertyTypes.DataSet;

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
		// Obtener columnas
		const columns = dataset.columns;
		// Obtener los registros en un array
		const records = Object.values(dataset.records);
		debugger
		//Creación HTML
		const table = document.createElement("table");
		const thead = document.createElement("thead");
		const tbody = document.createElement("tbody");
		// For..of == forEach) -> Diferentes scopes
		//Por cada una de las columnas
		for(const column of columns) {
			const th = document.createElement("th");
			const nameColumn = column.name;
			th.textContent = nameColumn;
			thead.appendChild(th);
			const tr = document.createElement("tr");
			// Por cada uno de los registros
			for(const record of records) {
				const td = document.createElement("td");
				const valueColumns = record.getFormattedValue(nameColumn);
				td.textContent = valueColumns;
				tr.appendChild(td)
			}
			tbody.appendChild(tr)
		}
		table.appendChild(thead)
		table.appendChild(tbody);
		this.container.appendChild(table)
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