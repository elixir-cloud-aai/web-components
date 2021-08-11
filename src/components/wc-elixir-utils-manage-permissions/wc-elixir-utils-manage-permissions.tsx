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

  changePermission = id => {
    var users = this.users;
    var index = users.findIndex(user => user.id == id);
    users[index].checked = !users[index].checked;
    this.users = [...users];
  };

  renderUsers = () => {
    var users = this.users;
    users = users.filter(user => user.name.toLowerCase().includes(this.searchUser.toLowerCase()) || user.email.toLowerCase().includes(this.searchUser.toLowerCase()));
    if (this.filter !== 'All') {
      if (this.filter === 'Not-Permitted') {
        users = users.filter(user => !user.permission);
      } else {
        users = users.filter(user => user.permission == this.filter);
      }
    }
    var startIndex = this.page * this.itemsPerPage;
    var endIndex = startIndex + this.itemsPerPage;
    return users.map((user, index) => {
      if (index < endIndex && index >= startIndex) {
        return (
          <div>
            <div class="flex items-center justify-between border-2 border-gray-100 rounded-lg hover:shadow-md mt-2 px-3 py-2" onClick={() => this.changePermission(user.id)}>
              <div>
                <div class="">
                  <div class={`title text-base font-semibold`}>
                    <span>{user.name}</span> <span class={`title text-xs font-extralight italic hidden lg:inline-block`}>- {user.email}</span>
                  </div>
                  <div class={`title text-xs font-extralight italic lg:hidden`}>{user.email}</div>
                </div>
              </div>
              <select id={user.id} class="text-sm outline-none">
                <option value="" selected={!user.permission}>
                  Not-Permitted
                </option>
                <option value="Permitted" selected={user.permission == 'Permitted'}>
                  Permitted
                </option>
                <option value="Manager" selected={user.permission == 'Manager'}>
                  Manager
                </option>
              </select>
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
      if (this.filter === 'Not-Permitted') {
        users = users.filter(user => !user.permission);
      } else {
        users = users.filter(user => user.permission == this.filter);
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
      this.filter = 'Manager';
    } else if (this.filter === 'Manager') {
      this.filter = 'Permitted';
    } else if (this.filter === 'Permitted') {
      this.filter = 'Not-Permitted';
    } else if (this.filter === 'Not-Permitted') {
      this.filter = 'All';
    }
    this.page = 0;
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
        <button class="py-2 px-5 bg-primary text-xs text-white rounded-lg focus:outline-none w-24" onClick={() => this.handleFilterClick()}>
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
        {this.renderSearchBar()}
        {this.renderUsers()}
        <br></br>
        {this.renderPagination()}
      </Host>
    );
  }
}
