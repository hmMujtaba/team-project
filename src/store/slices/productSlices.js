import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     products : [
        {
            id: 1,
            name: "Touch Watch",
            category: "Watch",
            price: "$230",
            image: "https://images.priceoye.pk/choetech-touch-screen-smart-watch-wt001-pakistan-priceoye-wyn77-500x500.webp",
        },
        {
            id: 2,
            name: "Dell Inspiron 15",
            category: "Laptop",
            price: "$850",
            image: "https://alaqsa.com.pk/wp-content/uploads/2024/02/Microsoft-Surface-Laptop-3-1.jpg",
        },
        {
            id: 3,
            name: "HP Pavilion x360",
            category: "Laptop",
            price: "$750",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYLC8kQpal0YU7Tg1R636HNoGA7rP61ImtKQ&s",
        },
        {
            id: 4,
            name: "MacBook Air M2",
            category: "Laptop",
            price: "$1,200",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDfFeAVHHRVsp0m7AxWZF4NK5gcJ1-6vZvcw&s",
        },
        {
            id: 5,
            name: "Lenovo ThinkPad X1",
            category: "Laptop",
            price: "$1,000",
            image: "https://laptopmart.pk/wp-content/uploads/2024/10/4-38fb6fc716fda32d1e17260650249594-1024-1024-e1729938604965.jpg",
        },
        {
            id: 6,
            name: "iPhone 14 Pro",
            category: "Mobile",
            price: "$1,099",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQznt-edtQlgPQ49uMffjvwhpoXodpj3uAS6Q&s",
        },
        {
            id: 7,
            name: "Samsung Galaxy S23",
            category: "Mobile",
            price: "$999",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSyLC3s5XchlI4LqKUgbrVyouuuRNIUNTUhg&s",
        },
        {
            id: 8,
            name: "Google Pixel 7 Pro",
            category: "Mobile",
            price: "$899",
            image: "https://m.media-amazon.com/images/I/61nqgl4atFL._AC_SL1500_.jpg",
        },
        {
            id: 9,
            name: "OnePlus 11",
            category: "Mobile",
            price: "$850",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKE89eFGnaNuTu6mxjnelKDpkb0x_3q1K1sQ&s",
        },
        {
            id: 10,
            name: "Xiaomi 13 Pro",
            category: "Mobile",
            price: "$799",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKE89eFGnaNuTu6mxjnelKDpkb0x_3q1K1sQ&s",
        }
    ],
};

const ProductSlice = createSlice({
    name: "products",
    initialState,
    reducer:{},
});
export const {} = ProductSlice.actions;
export default ProductSlice . reducer;