import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ListCard from '../components/ListCard';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState();
  const dispatch = useDispatch()
  const {data, isLogin} = useSelector((state) => state.auth);
  const [isLoading, setLoading] = useState(true);
  const [productData, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const handleSubmit = () => {
    dispatch({type: "login", payload: username})
  }
  useEffect(() => {
    axios.get(
      `https://zax5j10412.execute-api.ap-southeast-1.amazonaws.com/dev/api/product/list?page=${currentPage}`
      )
      .then(response => {
        setData(productData.concat(response.data.value.products));
        setLoading(false);
      })
  }, [])
  console.log(productData);
  return (
    <ScrollView>
        <View style={{flex: 1, alignItems: "center", backgroundColor: "#F6E8DF"}}>
          {productData && productData.map((e, i) => (
            <ListCard key={i} productImage={e.image} 
                      productVarietes={e.grapeVarietes.slice(0, 25) + `${ e.grapeVarietes.length > 25 ? "..." : ""}`}
                      productName={e.name}
                      productRegion={e.region +", "+ e.country}
                      productPrice={`${"S$ "}` + `${e.price.toString().includes(".") ? e.price : e.price + ".00"}`}
                      productLeft={`${e.qty < 1 ? "sold out" : ""}` + `${e.qty <=5 && e.qty > 0 ? e.qty + " left" : ""}`}
            />
          ))}          
        </View>
      </ScrollView>
    )
}

export default Login;
