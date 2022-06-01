import {
  Autocomplete,
  Button,
  Dialog,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormHelperText,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Switch,
  TextField,
} from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import ptBrLocale from "date-fns/locale/pt-BR";
import { useState } from "react";
import { MdHomeWork, MdOutlineSearch } from "react-icons/md";
import { RiPercentLine } from "react-icons/ri";

export function NovaDespesa() {
  const [open, setOpen] = useState(false);
  const [month, setMonth] = useState<Date | null>(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const CategoriasDespesas = [
    { icon: <MdHomeWork />, label: "Moradia" },
    { icon: <MdHomeWork />, label: "Moradia" },
    { icon: <MdHomeWork />, label: "Moradia" },
    { icon: <MdHomeWork />, label: "Moradia" },
    { icon: <MdHomeWork />, label: "Moradia" },
    { icon: <MdHomeWork />, label: "Moradia" },
  ];

  return (
    <>
      <Button variant='outlined' onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Nova despesa</DialogTitle>
        <DialogContentText>
          <TextField
            label='Valor'
            InputProps={{
              startAdornment: <InputAdornment position='end'>R$</InputAdornment>,
            }}
          />
          <div>
            <FormControlLabel
              value='start'
              control={<Switch color='primary' />}
              label='Pago'
              labelPlacement='start'
            />
            <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBrLocale}>
              <DatePicker
                views={["day"]}
                label='Data'
                value={month}
                minDate={new Date("2020-03-01")}
                maxDate={new Date("2029-06-01")}
                onChange={(newMonth) => {
                  setMonth(newMonth);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </div>
          <TextField
            label='Descrição'
            InputProps={{
              startAdornment: <InputAdornment position='end'>R$</InputAdornment>,
            }}
          />
          <Autocomplete
            disablePortal
            id='combo-box-demo'
            sx={{ width: "100%" }}
            options={CategoriasDespesas}
            renderInput={(params) => <TextField {...params} label='Categoria' />}
          />
          <FormControlLabel
            value='end'
            control={<Switch color='primary' />}
            label='Compartilhar conta'
            labelPlacement='end'
          />
          <div>
            <FormControl sx={{ width: "35ch" }} variant='outlined'>
              <InputLabel htmlFor='outlined-adornment-password'>
                Email do usuário para compartilhar
              </InputLabel>
              <OutlinedInput
                id='outlined-adornment-weight'
                label=' Email do usuário para compartilhar'
                endAdornment={
                  <InputAdornment position='end'>
                    <MdOutlineSearch />
                  </InputAdornment>
                }
                aria-describedby='outlined-weight-helper-text'
                inputProps={{
                  "aria-label": "weight",
                }}
              />
              <FormHelperText id='outlined-weight-helper-text'></FormHelperText>
            </FormControl>

            <FormControl sx={{ width: "15ch" }} variant='outlined'>
              <OutlinedInput
                id='outlined-adornment-weight'
                endAdornment={
                  <InputAdornment position='end'>
                    <RiPercentLine />
                  </InputAdornment>
                }
                inputProps={{
                  "aria-label": "weight",
                }}
              />
            </FormControl>
          </div>
        </DialogContentText>
        <Button variant='border'>Salvar</Button>
      </Dialog>
    </>
  );
}
