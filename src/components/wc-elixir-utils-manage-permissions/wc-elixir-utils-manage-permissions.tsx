import { Component, Host, h, Prop, State } from '@stencil/core';
import ServiceList from '../../data/service';
import UserList from '../../data/users';

@Component({
  tag: 'wc-elixir-utils-manage-permissions',
  styleUrl: 'wc-elixir-utils-manage-permissions.css',
  scoped: true,
})
export class WcElixirUtilsManagePermissions {
  @Prop() authToken: string;
  @Prop() itemsPerPage?: number = 5;
  @State() page: number = 0;
  @State() service: any;
  @State() users: any[];
  @State() searchUser: string = '';
  @State() filter: string = 'All';

  componentWillLoad = () => {
    if (this.authToken == 'component-demo') {
      this.service = ServiceList[0];
    }
    this.users = UserList;
  };

  toggleCheck = id => {
    var users = this.users;
    var index = users.findIndex(user => user.id == id);
    users[index].checked = !users[index].checked;
    this.users = [...users];
  };

  renderUsers = () => {
    var users = this.users;
    users = users.filter(user => user.name.toLowerCase().includes(this.searchUser.toLowerCase()) || user.email.toLowerCase().includes(this.searchUser.toLowerCase()));
    if (this.filter !== 'All') {
      if (this.filter === 'Allowed') {
        users = users.filter(user => user.checked);
      } else {
        users = users.filter(user => !user.checked);
      }
    }
    var startIndex = this.page * this.itemsPerPage;
    var endIndex = startIndex + this.itemsPerPage;
    return users.map((user, index) => {
      if (index < endIndex && index >= startIndex) {
        return (
          <div>
            <div class="flex items-center justify-between border-2 border-gray-100 rounded-lg hover:shadow-md mt-2 px-3 py-2" onClick={() => this.toggleCheck(user.id)}>
              <div>
                <div class="">
                  <div class={`title text-base font-semibold`}>
                    <span>{user.name}</span> <span class={`title text-xs font-extralight italic hidden lg:inline-block`}>- {user.email}</span>
                  </div>
                  <div class={`title text-xs font-extralight italic lg:hidden`}>{user.email}</div>
                </div>
              </div>
              {user.checked ? (
                <div class="`w-5 h-4 border-2 border-primary  bg-primary rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-white " viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              ) : (
                <div class={`w-4 h-4 border-2 rounded-md`}></div>
              )}
            </div>
          </div>
        );
      }
    });
  };

  renderPagination = () => {
    var users = this.users;
    users = users.filter(user => user.name.toLowerCase().includes(this.searchUser.toLowerCase()) || user.email.toLowerCase().includes(this.searchUser.toLowerCase()));
    if (this.filter !== 'All') {
      if (this.filter === 'Allowed') {
        users = users.filter(user => user.checked);
      } else {
        users = users.filter(user => !user.checked);
      }
    }
    let totalPages = Math.ceil(users.length / this.itemsPerPage);
    let selected = [true];
    for (let index = 0; index < totalPages - 1; index++) {
      selected = [...selected, false];
    }
    return (
      <div class="flex justify-center align-middle">
        <button
          class={`p-1.5 shadow rounded-full border-2 hover:shadow-lg focus:outline-none border-gray-100 h-9 w-9 mr-3 ${this.page == 0 ? 'invisible' : ''}`}
          onClick={() => (this.page = this.page - 1)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
        </button>

        {selected.map((_isSelected, index) => {
          return (
            <button
              class={`mx-1 p-1 shadow rounded-lg hover:shadow-lg focus:outline-none h-9 w-9 ${this.page == index ? 'bg-primary text-white' : ''}`}
              onClick={() => {
                this.page = index;
              }}
            >
              {index + 1}
            </button>
          );
        })}

        <button
          class={`p-1.5 shadow rounded-full border-2 hover:shadow-lg focus:outline-none border-gray-100 h-9 w-9 ml-3 ${this.page == totalPages - 1 ? 'invisible' : ''}`}
          onClick={() => (this.page = this.page + 1)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
    );
  };

  handleSearchQuery = e => {
    this.searchUser = (e.target as HTMLInputElement).value;
  };

  handleFilterClick = () => {
    if (this.filter === 'All') {
      this.filter = 'Allowed';
    } else if (this.filter === 'Allowed') {
      this.filter = 'Not-Allowed';
    } else if (this.filter === 'Not-Allowed') {
      this.filter = 'All';
    }
  };

  renderSearchBar = () => {
    return (
      <div class="flex">
        <input
          class="flex-1 text-sm border-2 mr-2 py-2 px-3 focus:outline-none rounded-lg focus:shadow"
          placeholder="Search by user's name or email..."
          value={this.searchUser}
          onInput={e => this.handleSearchQuery(e)}
        ></input>
        <button class="py-2 px-5 bg-primary text-sm text-white rounded-lg focus:outline-none w-24" onClick={() => this.handleFilterClick()}>
          {this.filter}
        </button>
      </div>
    );
  };

  render() {
    if (!this.service) {
      return (
        <div class="text-center">
          <div class="text-gray-700">Loading...</div>
        </div>
      );
    }
    if (this.service.type != 'Owned') {
      return (
        <div class="flex text-red-400 justify-center font-semibold">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Sorry, You are not authorized to manage permission for this service.
        </div>
      );
    }
    return (
      <Host>
        <div class="text-center">
          <div class="text-lg font-semibold">Manage Permissions</div>
          <div class="text-gray-700">{this.service.name}</div>
        </div>
        <br></br>
        {this.renderSearchBar()}
        {this.renderUsers()}
        <br></br>
        {this.renderPagination()}
      </Host>
    );
  }
}
