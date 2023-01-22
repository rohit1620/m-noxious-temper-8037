import React,{useState} from 'react';
import Products from '../Components/Products';

const shoe = [
  {
    image:
      "https://media.crocs.com/images/t_thumbnail/f_auto%2Cq_auto/products/10007121_001_ALT100/crocs-cup-of-joe-peg",
    name: "Classic cloc",
    num: "30577",
    p1: "243",
    p2: "456",
    b1: "red",
    b2: "blue",
    b3: "white",
    b4: "green",
    b5: "yellow",
  },
  {
    image:
      "https://media.crocs.com/images/t_thumbnail/f_auto%2Cq_auto/products/10008141_001_ALT100/crocs-stethoscope",
    name: "Classic Line cog",
    num: "9847",
    p1: "75",
    p2: "264",
    b1: "#FF6600",
    b2: "#FFFFFF",
    b3: "#000000",
    b4: "#A020F0",
    b5: "#964B00",
  },
  {
    image:
      "https://media.crocs.com/images/t_thumbnail/f_auto%2Cq_auto/products/10010366_001_ALT100/crocs-health-heart-5-pack",
    name: "Classic Platform Line",
    num: "5768",
    p1: "45",
    p2: "564",
    b1: "#F0F8FF",
    b2: "#FAEBD7",
    b3: "#00FFFF",
    b4: "#000000",
    b5: "#8A2BE2",
  },
  {
    image:
      "https://media.crocs.com/images/t_thumbnail/f_auto%2Cq_auto/products/10009046_001_ALT100/crocs-food-lover-10-pack",
    name: "Mega clus clog",
    num: "8973",
    p1: "175",
    p2: "964",
    b1: "#A52A2A",
    b2: "#DEB887",
    b3: "#5F9EA0",
    b4: "#7FFF00",
    b5: "#D2691E",
  },
  {
    image:
      "https://media.crocs.com/images/t_thumbnail/f_auto%2Cq_auto/products/10009122_001_ALT100/crocs-chef-5-pack",
    name: "Mega crush gandal",
    num: "4567",
    p1: "35",
    p2: "864",
    b1: "#FF7F50",
    b2: "#6495ED",
    b3: "#FFF8DC",
    b4: "#DC143C",
    b5: "#00FFFF",
  },
  {
    image:
      "https://media.crocs.com/images/t_thumbnail/f_auto%2Cq_auto/products/10009350_001_ALT100/crocs-avo",
    name: "Echo Clog item",
    num: "73663",
    p1: "45",
    p2: "984",
    b1: "#00008B",
    b2: "#008B8B",
    b3: "#B8860B",
    b4: "#A9A9A9",
    b5: "yellow",
  },
  {
    image:
      "https://media.crocs.com/images/t_thumbnail/f_auto%2Cq_auto/products/10009446_001_ALT100/crocs-heart-scrub",
    name: "Classic Rabel Rabel",
    num: "67667",
    p1: "95",
    p2: "277",
    b1: "#BDB76B",
    b2: "blue",
    b3: "#8B008B",
    b4: "green",
    b5: "#556B2F",
  },
  {
    image:
      "https://media.crocs.com/images/t_thumbnail/f_auto%2Cq_auto/products/10011056_001_ALT100/crocs-figs-x-crocs-5-pack-2",
    name: "Pride love",
    num: "5557",
    p1: "45",
    p2: "876",
    b1: "#2F4F4F",
    b2: "#00CED1",
    b3: "white",
    b4: "green",
    b5: "#FF1493",
  },
  {
    image:
      "https://media.crocs.com/images/t_thumbnail/f_auto%2Cq_auto/products/10008763_001_ALT100/crocs-chefs-kiss-hat",
    name: "Bistro Pro classic",
    num: "89778",
    p1: "87",
    p2: "897",
    b1: "#FFD700",
    b2: "#DAA520",
    b3: "white",
    b4: "green",
    b5: "#808080",
  },
  {
    image:
      "https://media.crocs.com/images/t_thumbnail/f_auto%2Cq_auto/products/10008601_001_ALT100/crocs-human-kind",
    name: "Classic Line cog",
    num: "89898",
    p1: "123",
    p2: "398",
    b1: "#008000",
    b2: "blue",
    b3: "white",
    b4: "#4B0082",
    b5: "yellow",
  },
  {
    image:
      "https://media.crocs.com/images/t_thumbnail/f_auto%2Cq_auto/products/208112_066_ALT100/crocs-classic-adjustable-slip-resistant-marbled-clog",
    name: "Classic Pin cog",
    num: "33333",
    p1: "725",
    p2: "1264",
    b1: "#7CFC00",
    b2: "#F08080",
    b3: "#D3D3D3",
    b4: "#90EE90",
    b5: "yellow",
  },
  {
    image:
      "https://media.crocs.com/images/t_thumbnail/f_auto%2Cq_auto/products/10010364_001_ALT100/crocs-chef-medallion",
    name: "Classic narrow cog",
    num: "24544",
    p1: "375",
    p2: "2264",
    b1: "red",
    b2: "#20B2AA",
    b3: "white",
    b4: "green",
    b5: "yellow",
  },
];

const Crocs = () => {
  const [data, setData] = useState(shoe);
  return (
    <div>
      <h3 style={{textAlign:"left"}}>Crocs Shoe Products</h3>
      <Products data={data} />
    </div>
  )
}

export default Crocs
