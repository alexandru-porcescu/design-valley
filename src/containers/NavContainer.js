import React, { useState, useEffect } from "react";
import { fetchCategories } from "../api";
import Sidebar from "../components/Sidebar";
import HamburgerMenu from "../components/HamburgerMenu";
import { useDispatch } from "react-redux";
import { SET_CATEGORIES } from "../redux/reducers/categoriesReducer";
import useWindowSize from "../hooks/useWindowSize";

const SidebarContainer = ({ match }) => {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState(null);
  const [isReady, setIsReady] = useState(false);
  const size = useWindowSize();

  useEffect(() => {
    fetchCategories().then(res => {
      setCategories(res);
      setIsReady(true);
      dispatch({ type: SET_CATEGORIES, payload: res });
    });
  }, []);

  const isMobile = size.width < 800;

  if (isMobile) {
    return <HamburgerMenu categories={categories} isLoading={!isReady} />;
  } else {
    return <Sidebar categories={categories} isLoading={!isReady} />;
  }
};

export default SidebarContainer;
