import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Pagination,
  PaginationItem,
  Stack,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import img from "../../assets/proizvaditel.png";

const countries = [
  "Австралия",
  "Австрия",
  "Беларусь",
  "Бельгия",
  "Великобритания",
  "Германия",
  "Израиль",
  "Испания",
];

const theme = createTheme({
  components: {
    MuiPaginationItem: {
      styleOverrides: {
        outlined: {
          "&.Mui-selected": {
            backgroundColor: "#088269", // Tanlangan sahifaning rangi
            color: "white",
            // Tanlangan sahifadagi matn rangi
            borderRadius: "10px",
          },
        },
      },
    },
  },
});

const items = [...Array(45)].map((_, index) => ({
  id: index,
  name: `НМИЦ онкологии им. Н.Н. Блохина ${index + 1}`,
  img: img,
}));

const itemsPerPage = 9;

const Proizvaditel = () => {
  const [country, setCountry] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const currentItems = items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="bg-[#f8f7f3]">
      <div className="max-w-[1350px] py-[20px] mx-auto px-5 flex gap-[30px]">
        <div className="w-[30%]">
          <div className="border rounded-lg py-[10px] px-[20px]">
            <h2 className="flex justify-between py-2">
              Направления
              <MdKeyboardArrowDown className={`duration-300 rotate-0`} />
            </h2>
          </div>
          <div className="border rounded-lg py-[10px] my-[10px] px-[20px]">
            <h2
              onClick={() => setCountry(!country)}
              className="flex justify-between py-2"
            >
              Страна
              <MdKeyboardArrowDown
                className={`duration-300 ${
                  country ? "rotate-180" : "rotate-0"
                }`}
              />
            </h2>
            <div
              className={`py-[10px] duration-300 overflow-hidden ${
                country ? "h-[400px] block" : "h-[0px] hidden"
              }`}
            >
              <div
                className={`flex justify-between items-center rounded-full p-3 px-4 ${
                  country ? "bg-[#fff]" : "bg-transparent"
                }`}
              >
                <input
                  type="text"
                  className="border-none outline-none w-full"
                  placeholder="Поиск по стране"
                />
                <IoIosSearch size={20} />
              </div>
              <div className="mt-[10px]">
                <div className="space-y-2">
                  {countries.map((country, index) => (
                    <FormGroup key={index}>
                      <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label={country}
                      />
                    </FormGroup>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-3 pt-[10px]">
            <button className="px-10 py-2 border rounded-full">Сбросить</button>
            <button className="px-6 w-full py-2 bg-[#088269] text-[#fff] border rounded-full">
              Показать
            </button>
          </div>
        </div>
        <div className="w-[70%]">
          <div className="grid grid-cols-3 gap-4">
            {currentItems.map((item) => (
              <div key={item.id} className="border rounded-lg overflow-hidden">
                <div className="h-[196px] border-b bg-[#fff] flex justify-center items-center">
                  <img src={item.img} alt="" />
                </div>
                <h2 className="px-5 py-3">{item.name}</h2>
              </div>
            ))}
          </div>

          {/* <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            className="mt-4 flex justify-center"
          /> */}
          <ThemeProvider theme={theme}>
            <div className="mt-4 flex justify-center pagination">
              <Stack spacing={2}>
                <Pagination
                  count={totalPages}
                  page={currentPage}
                  onChange={handlePageChange}
                  shape="rounded"
                  className="rounded-lg"
                  variant="outlined"
                  renderItem={(item) => (
                    <PaginationItem
                      {...item}
                      classes={{ selected: "selected" }}
                    />
                  )}
                />
              </Stack>
            </div>
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
};

export default Proizvaditel;
