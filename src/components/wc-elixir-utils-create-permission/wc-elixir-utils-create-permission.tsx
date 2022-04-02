import { Component, Host, h, State } from "@stencil/core";

@Component({
  tag: "wc-elixir-utils-create-permission",
  scoped: true,
})
export class WcElixirUtilsCreatePermission {
  @State() Users = [
    "User1",
    "User2",
    "User3",
    "User4",
    "User5",
    "User6",
    "User7",
    "User8",
    "User9",
    "User10",
  ];
  @State() Groups = ["Group1", "Group2", "Group3", "Group4", "Group5"];
  @State() rule_type = "";
  @State() fields: any = {
    properties: {
      ruleSection: {
        name: "ruleSection",
        type: "select",
        options: ["p", "g"],
        description: `This defines the section for which the rule is being added. Type "p" and "g" refer to policy and role sections respectively.`,
      },
      policyType: {
        name: "policyType",
        type: "text",
        description: `This defines the policy type of the permission (rule) definition.`,
      },
      name: {
        name: "name",
        type: "select",
        options:
          this.rule_type === ""
            ? []
            : this.rule_type === "p"
            ? this.Users
            : this.Groups,
      },
      requestEndpoint: {
        name: "requestEndpoint",
        type: "text",
      },
      requestMethod: {
        name: "requestMethod",
        type: "select",
        options: ["*", "GET", "POST", "PUT", "DELETE"],
      },
    },
    required: ["policyType", "name", "requestEndpoint", "requestMethod"],
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

  handleShow = (property) => {
    var fields = this.fields;
    fields.properties[property].show = !fields.properties[property].show;
    this.fields = { ...fields };
  };

  renderText = (property) => {
    return (
      <input
        required={this.isRequired(property, this.fields)}
        class={`w-full text-sm border-2 py-1.5 px-3 focus:outline-none rounded-lg focus:shadow ${
          this.fields.properties[property].properties ? "invisible" : ""
        }`}
      ></input>
    );
  };

  renderSelect(property) {
    return (
      <select
        required={this.isRequired(property, this.fields)}
        class={`w-full text-sm border-2 py-1.5 px-3 focus:outline-none rounded-lg focus:shadow ${
          this.fields.properties[property].properties ? "invisible" : ""
        }`}
        onChange={(e) => {
          //@ts-ignore
          console.log(e.target.value);
          //@ts-ignore
          this.rule_type = e.target.value;
          let fields = this.fields;
          fields.properties.name.options =
            this.rule_type === ""
              ? []
              : this.rule_type === "p"
              ? this.Users
              : this.Groups;
          this.fields = { ...fields };
        }}
      >
        <option value="none" selected disabled hidden>
          Select an Option
        </option>
        {this.fields.properties[property].options.map((option) => {
          return <option value={option}>{this.toTitleCase(option)}</option>;
        })}
      </select>
    );
  }

  renderFields() {
    return (
      <form>
        {Object.keys(this.fields.properties).map((property) => {
          return (
            <div class="py-2 border-b ">
              <div class="flex justify-between items-center">
                <div class="flex-1 pr-2">
                  <div class="flex items-center flex-1">
                    {this.toTitleCase(this.fields.properties[property].name)}
                    {this.isRequired(
                      this.fields.properties[property].name,
                      this.fields
                    )
                      ? "*"
                      : ""}
                    <div
                      class={
                        this.fields.properties[property].description
                          ? ""
                          : "hidden"
                      }
                    >
                      <div onClick={() => this.handleShow(property)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-3 w-3 m-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div
                    class={
                      this.fields.properties[property].show
                        ? "text-xs text-gray-600 text-justify"
                        : "hidden"
                    }
                  >
                    {this.fields.properties[property].description}
                  </div>
                </div>
                <div class="flex-1">
                  {this.fields.properties[property].type === "select"
                    ? this.renderSelect(property)
                    : this.renderText(property)}
                </div>
              </div>
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
      </form>
    );
  }

  render() {
    return (
      <Host>
        <div>{this.renderFields()}</div>
      </Host>
    );
  }
}
