import React, { useState, useEffect} from 'react';
import CardFood from '../components/CardFood/CardFood';
import HeaderTitle from '../components/HeaderTitle/HeaderTitle';
import FooterMenu from '../components/FooterMenu/FooterMenu';
import { Container, FoodTypeBarContainer, CardFoodContainer, ActiveFilter, InativeFilter, CardActiveOrderContainer, SearchIcon, RastauranteInput, Rectangle } from './styles/Home'
import useGetRestaurants from "../hooks/useGetRestaurants";
import { useHistory } from "react-router-dom";
import CardActiveOrder from '../components/Restaurants/CardActiveOrder';

const baseUrl = 'https://us-central1-missao-newton.cloudfunctions.net/futureEatsA'

export default props => {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [category, setCategory] = useState([]);
    const [filterSearch, setFilterSearch] = useState("");
    const history = useHistory();

    const [restaurantsList, getRestaurants] = useGetRestaurants(
    `${baseUrl}/restaurants`, [], 'restaurants' 
  )

  useEffect(() => {
    const token = window.localStorage.getItem("token")

    if (token === null) {
      history.push("/")
    }
  }, [history])

  useEffect(() => {
    pegaCategorias()
  }, [restaurantsList])

  const pegaCategorias = () => {
    const arrayPegaCategorias = []

    restaurantsList.map((restaurant) => {
        arrayPegaCategorias.push(restaurant.category)
    })

    const arrayRemoveRepetidos = [ ...new Set(arrayPegaCategorias) ]
    setCategory(arrayRemoveRepetidos)
  }

  const onClickCategory = (idx) => {
    setSelectedCategory(idx)
  }

  const onClickResetCategory = () => {
    setSelectedCategory("")
  }

  const showRestaurantsList = () => {
    if (filterSearch === "") {
      if (selectedCategory !== "") {
    
        return <>
          {restaurantsList.map((idx) => {
          if (selectedCategory == idx.category) {
            return (
                  <CardFood restaurants={idx}/>
            )
          }
          })}
        </>
      } else {
        return <>
          {restaurantsList.map((idx) => {
            return(
              <>
                <CardFood restaurants={idx} goToRestaurantDetail />
              </>
            )
          })}
        </>
      }
    } else {
      return <>{filteredRestaurants.map((idx) => {
                return <>
                  <CardFood restaurants={idx} goToRestaurantDetail />
                </>
      })}
            </>
    }
  }

  const showCategories = () => {
    return <>{category.map((idx) => {
      return <>
          {selectedCategory === idx ?
          <ActiveFilter onClick={() => onClickCategory(idx)}>{idx}</ActiveFilter> :
          <InativeFilter onClick={() => onClickCategory(idx)}>{idx}</InativeFilter>}
        </>
    })}</>
  }
  
    const filteredRestaurants = restaurantsList.filter((elm) => {
    return (elm.name.toLowerCase().includes(filterSearch.toLowerCase()) ? true : false) || (elm.name.toLowerCase().includes(filterSearch.toLowerCase()) ? true : false)
    })

    const onChangeSearch = (event) => {
      setFilterSearch(event.target.value)
    }

    return (
        <Container>
            <HeaderTitle />
            <Rectangle>
              <SearchIcon color={'disabled'}/>
              <form>
                <RastauranteInput onChange={onChangeSearch} placeholder={'Restaurante'} />
              </form>
            </Rectangle>
            <FoodTypeBarContainer>
              {showCategories()}<InativeFilter onClick={() => onClickResetCategory()}>Mostrar todos</InativeFilter>
            </FoodTypeBarContainer>
            <CardFoodContainer>
              {showRestaurantsList()}
            </CardFoodContainer>
            <CardActiveOrderContainer>
              <CardActiveOrder />
            </CardActiveOrderContainer>
            <FooterMenu />
        </Container>
    );

}