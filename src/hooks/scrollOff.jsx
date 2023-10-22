import { useState, useEffect } from "react";
const scrollOff = (valor) => {
  sessionStorage.setItem('scrollOff',valor)
};
export default scrollOff;
