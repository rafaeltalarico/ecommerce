import mesa from "../src/images/mesa.png";
import cadeira from "../src/images/cadeira.png";
import sofaGrande from "../src/images/sofa-grande.png";
import sofaSala from "../src/images/sofa-sala.png"
import abajur from "../src/images/abajur.png";
import sofa from "../src/images/sofa.png";
import sofaGrande2 from "../src/images/sofa-grande2.png";
import sofaPequeno from "../src/images/sofa-pequeno.png";


const productData = [
    { id: 1, name: 'Syltherine', description: 'Stylish cafe chair', price: 'Rp 2.500.000', image: mesa, category: 'Dining', discount: 30 },
    { id: 2, name: 'Leviosa', description: 'Stylish cafe chair', price: 'Rp 2.500.000', image: cadeira, category: 'Dining' },
    { id: 3, name: 'Lolito', description: 'Luxury big sofa', price: 'Rp 7.000.000', image: sofaGrande, category: 'Living', discount: 50},
    { id: 4, name: 'Respira', description: 'Outdoor bar table and stool', price: 'Rp 500.000', image: sofaSala, category: 'Living', newProduct: true},
    { id: 5, name: 'Grifo', description: 'Night lamp', price: 'Rp 1.500.000', image: abajur, category: 'Bedroom'},
    { id: 6, name: 'Muggo', description: 'Small mug', price: 'Rp 150.000', image: sofa, category: 'Living', newProduct: true},
    { id: 7, name: 'Pingky', description: 'Cute bed set', price: 'Rp 7.000.000', image: sofaGrande2, category: 'Bedroom', discount: 50},
    { id: 8, name: 'Potty', description: 'Minimalist flower pot', price: 'Rp 500.000', image: sofaPequeno, category: 'Living', newProduct: true},
];

export default productData;
