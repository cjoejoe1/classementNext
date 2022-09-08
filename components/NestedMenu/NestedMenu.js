import React, { useState, useContext } from "react";
import styled from "styled-components";
import { ListGroup, Collapse, Button } from "react-bootstrap";

import { FaArrowRight, FaAngleRight, FaAngleDown } from 'react-icons/fa'
import Link from "next/link";
import GlobalContext from "../../context/GlobalContext";

const NestedMenuContainer = styled.div`
  a {
    color: #696871;
    transition: all 0.3s ease-out;
    &:hover,
    &:active {
      color: #e2244f;
      text-decoration: none;
    }
  }
  .list-group-item {
    & + .collapse:not(.show) {
      .list-group-item {
        border: none !important;
        border-width: 0 !important;
      }
    }
    & + .collapse.show {
      .list-group-item {
        &:first-child {
          border-top: none !important;
        }
      }
    }
  }
  .collapse + .list-group-item {
    border-top-width: 0;
  }
  /* .list-group-flush:last-child .list-group-item:last-child {
    border-bottom-width: 1px;
  } */
`;

const defaultMenuItems = [
  { name: "home", label: "Home" },
  {
    name: "billing",
    label: "Billing",
    items: [
      { name: "statements", label: "Statements" },
      { name: "reports", label: "Reports" },
    ],
  },
  {
    name: "settings",
    label: "Settings",
    items: [
      { name: "profile", label: "Profile" },
      { name: "insurance", label: "Insurance" },
      {
        name: "notifications",
        label: "Notifications",
        items: [
          { name: "email", label: "Email" },
          {
            name: "desktop",
            label: "Desktop",
            items: [
              { name: "schedule", label: "Schedule" },
              { name: "frequency", label: "Frequency" },
            ],
          },
          { name: "sms", label: "SMS" },
        ],
      },
    ],
  },
];

const MenuItem = ({
  label,
  isExternal = false,
  name,
  items,
  depthStep = 20,
  depth = 0,
  ...rest
}) => {
  const [open, setOpen] = useState(false);
  const hasSubItems = Array.isArray(items);

  const gContext = useContext(GlobalContext);
  
  return (
    <>
      {hasSubItems ? (
        <ListGroup.Item
          {...rest}
          css={`
            padding-left: ${depth * depthStep}px !important;
            cursor: pointer;
          `}
          onClick={() => setOpen(!open)}
          className="d-flex align-items-center justify-content-between"
        >
          <span>{label}</span>
          <span>{open ? <FaAngleDown /> : <FaAngleRight />}</span>
        </ListGroup.Item>
      ) : (
        <ListGroup.Item
          {...rest}
          css={`
            padding-left: ${depth * depthStep}px !important;
          `}
        >
          {isExternal ? (
            <a
              href={`${name}`}
              onClick={() => {
                if (gContext.visibleOffCanvas) {
                  gContext.toggleOffCanvas();
                }
              }}
            >
              {label}
            </a>
          ) : (

            <Link
              href={`/${name}`}
              passHref
            >
              <a onClick={() => {
                if (gContext.visibleOffCanvas) {
                  gContext.toggleOffCanvas();
                }
              }}>
              {label}
              </a>
            </Link>
          )}
        </ListGroup.Item>
      )}

      {hasSubItems ? (
        <Collapse in={open}>
          <ListGroup>
            {items.map((subItem) => (
              <MenuItem
                key={subItem.name}
                depth={depth + 1}
                depthStep={depthStep}
                {...subItem}
              />
            ))}
          </ListGroup>
        </Collapse>
      ) : null}
    </>
  );
};

const NestedMenu = ({ menuItems = defaultMenuItems, headerCta, leadUrl, design }) => {
  const gContext = useContext(GlobalContext);
  return (
    <NestedMenuContainer>
      <ListGroup variant="flush">
      <Link href={'/start/'} passHref >
          <Button onClick={() => {
                if (gContext.visibleOffCanvas) {
                  gContext.toggleOffCanvas();
                }
              }} style={{marginBottom: 10, background: '#0d6efd', borderColor: '#0d6efd', color: 'white'}}>Start Now <FaArrowRight /></Button>
        </Link>
        {menuItems.map((menuItem, index) => (
          // console.log('eachMenuItem', menuItem)
          <MenuItem
            key={`${menuItem.name}${index}`}
            depthStep={20}
            depth={0}
            {...menuItem}
          />
        ))}
        
      </ListGroup>
    </NestedMenuContainer>
  );
};

export default NestedMenu;