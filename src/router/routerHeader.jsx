import React from 'react'
import AppleIcon from '@material-ui/icons/Apple';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import TabletMacIcon from '@material-ui/icons/TabletMac';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HeadsetIcon from '@material-ui/icons/Headset';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const headers=[
    {
      name: "I Phone",
      to: "/iPhone",
      exact: false,
      icon:<AppleIcon/>
    },
    {
      name: "Điện thoại",
      to: "/phone",
      exact: false,
      icon:<PhoneIphoneIcon/>
    },
    {
      name: "Tablet",
      to: "/tablet",
      exact: false,
      icon: <TabletMacIcon/>
    },
    {
      name: "Laptop",
      to: "/lapTop",
      exact: false,
      icon:<LaptopMacIcon/>
    },
    {
      name: "Phụ Kiện",
      to: "/accessories",
      exact: false,
      icon:<HeadsetIcon/>
    },
    {
      name: "Giỏ Hàng",
      to: "/cart",
      exact: false,
      icon: <ShoppingCartIcon/>
    },
    // {
    //   name: "Khuyến mãi",
    //   to: "/promotion",
    //   exact: false,
    //   icon: <NotificationsIcon/>
    // }
  ]
  export default headers;
  