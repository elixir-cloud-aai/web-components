import { Component, Host, h, Prop, State } from "@stencil/core";
import axios from "axios";

@Component({
  tag: "wc-elixir-utils-new-service",
  styleUrl: "wc-elixir-utils-new-service.css",
  scoped: true,
})
export class WcElixirUtilsNewService {
  @Prop() apiUrl: string;
  @Prop() schema: string;
  @Prop() authToken: string;
  @Prop() description: "icon"|"text"|"none" = "icon";
  @State() fields: any;
  @State() data: string = "loading";

  componentWillLoad = async () => {
    try {
      const res = await axios.get(this.apiUrl);
      this.fields = res.data.components.schemas[this.schema];
      this.data = "loaded";
    } catch (e) {
      this.data = "error";
    }
  };

  toTitleCase = (str) => {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1);
    });
  };

  isRequired = (field, fields) => {
    let index = fields.required.findIndex((req) => field === req);
    if (index == -1) {
      return false;
    }
    return true;
  };

  renderFields = () => {
    if (this.data == "loading") {
      return (
        <div class="text-center">
          <div class="text-gray-700">Loading...</div>
        </div>
      );
    }
    if (this.data == "error" || !this.fields) {
      return (
        <div class="flex text-red-400 justify-center font-semibold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Sorry, the open api endpoint doesn't exist.
        </div>
      );
    }
    return (
      <div>
        {Object.keys(this.fields.properties).map((property) => {
          return (
            <div class="py-2 border-b ">
              <div class="flex justify-between items-center">
                <div class="text flex-1">
                  <div class ="flex items-center flex-start">
                  {this.toTitleCase(property)}
                  {this.isRequired(property, this.fields) ? "*" : ""}:
                  {this.description==="icon" ?
                  <div class="tooltip"> 
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" style={{display:"inline"}}>
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                  </svg>
                  <span class="tooltiptext">{this.fields.properties[property].description}</span>
                  </div>
                  :<div></div>}
                  </div>
                </div>
                <div class="flex-1">
                  <input
                    required={this.isRequired(property, this.fields)}
                    // placeholder={this.fields.properties[property].description}
                    class={`w-full text-sm border-2 py-1.5 px-3 focus:outline-none rounded-lg focus:shadow ${
                      this.fields.properties[property].properties ? "invisible" : ""
                    }`}
                  ></input>
                </div>
              </div>
              {this.description === "text" ?
                <div class="text-xs text-gray-400 italic">{this.fields.properties[property].description}</div>
                :<div></div>}
              {this.fields.properties[property].properties ? (
                Object.keys(this.fields.properties[property].properties).map((subproperty) => {
                  return (
                      <div>
                      <div class="flex justify-between items-center my-2">
                      <div class="text flex-1">
                        {this.toTitleCase(subproperty)}:
                        {this.description==="icon" ?
                  <div class="tooltip"> 
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" style={{display:"inline"}}>
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                  </svg>
                  <span class="tooltiptext">{this.fields.properties[property].description}</span>
                  </div>
                  :<div></div>}
                        </div>
                      <div class="flex-1">
                        <input
                          required={this.isRequired(property, this.fields.properties[property])}
                          class="w-full text-sm border-2 py-1.5 px-3 focus:outline-none rounded-lg focus:shadow"
                        ></input>
                      </div>
                        </div>
                        {this.description === "text" ?
                <div class="text-xs text-gray-400 italic">{this.fields.properties[property].description}</div>
                :<div></div>}
                      </div>
                  );
                })
              ) : (
                <div></div>
              )}
            </div>
          );
        })}
        <div class="text-center">
          <button
            type="submit"
            class="bg-secondary rounded-lg px-4 py-2 md:mr-2 my-2 text-white hover:shadow-lg focus:outline-none w-full md:w-48"
          >
            Submit
          </button>
        </div>
      </div>
    );
  };

  render() {
    console.log(this.fields);
    return (
      <Host>
        <form>{this.renderFields()}</form>
      </Host>
    );
  }
}
