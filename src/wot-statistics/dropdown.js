import React, { Component } from "react";
import { FaAngleDown } from "react-icons/fa";
import { DropdownContainer, DropdownBox, DropBox, RegionList } from "./styled";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpened: false };
  }

  toggleState() {
    this.setState({ isOpened: !this.state.isOpened });
  }

  render() {
    let dropdownRegion;
    if (this.state.isOpened) {
      dropdownRegion = (
        <RegionList>
          <DropBox>ru</DropBox>
          <DropBox>eu</DropBox>
          <DropBox>na</DropBox>
          <DropBox>asia</DropBox>
        </RegionList>
      );
    }
    return (
      <DropdownContainer>
        <DropdownBox onClick={() => this.toggleState()}>
          Region selection
          <FaAngleDown />
        </DropdownBox>
        {dropdownRegion}
      </DropdownContainer>
    );
  }
}
export default Dropdown;
