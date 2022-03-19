import { FunctionalComponent, h } from "preact";
import classed from "pclc";
import MenuIcon from "../icons/menu";
import MenuItem from "./menu-item";

const Wrapper = classed.div`drawer h-screen w-full`;
const DrawerToggle = classed.input`drawer-toggle w-50 h-50`;
const Container = classed.div`drawer-content flex flex-col`;
const NavBar = classed.div`w-full navbar bg-base-300`;
const ButtonWrapper = classed.div`flex-none lg:hidden`;
const MenuButton = classed.label`btn btn-square btn-ghost`;
const Title = classed.div`flex-1 px-2 mx-2`;
const MenuListWrapper = classed.div`flex-none hidden lg:block`;
const MenuList = classed.ul`menu menu-horizontal`;
const Drawer = classed.div`drawer-side`;
const Overlay = classed.label`drawer-overlay`;
const ItemList = classed.ul`menu p-4 overflow-y-auto w-80 bg-base-100`;

const Scaffold: FunctionalComponent = ({ children }) => {
  return (
    <Wrapper>
      <DrawerToggle id="my-drawer-3" type="checkbox" />
      <Container>
        {/* <!-- Navbar --> */}
        <NavBar>
          <ButtonWrapper>
            <MenuButton for="my-drawer-3">
              <MenuIcon />
            </MenuButton>
          </ButtonWrapper>
          <Title>Navbar Title</Title>
          <MenuListWrapper>
            <MenuList>
              {/* <!-- Navbar menu content here --> */}
              <MenuItem>Navbar Item 1</MenuItem>
              <MenuItem>Navbar Item 2</MenuItem>
            </MenuList>
          </MenuListWrapper>
        </NavBar>
        {/* <!-- Page content here --> */}
        {children}
      </Container>
      <Drawer>
        <Overlay for="my-drawer-3" />
        <ItemList>
          {/* <!-- Sidebar content here --> */}
          <MenuItem>Sidebar Item 1</MenuItem>
          <MenuItem>Sidebar Item 2</MenuItem>
        </ItemList>
      </Drawer>
    </Wrapper>
  );
};

export default Scaffold;
