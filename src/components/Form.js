import React from 'react';
import { useForm } from 'react-hook-form';
import { FormControl, Input, InputLabel, Button, Box } from '@mui/material';
import './Form.css';

export const Form = ({ fields, formGreetings, onSubmit }) => {
  const { register, handleSubmit } = useForm();

  return (
    <Box fontFamily={"Playfair Display"} display={'flex'} flexDirection={'column'} alignItems={'center'}>
       
    <h2 className='form-title'>{formGreetings.title}</h2>
    <p>{formGreetings.subtitle}</p>

    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field, index) => (
        <FormControl key={index} fullWidth margin="normal">
          <InputLabel>{field.label}</InputLabel>
          <Input
            type={field.type}
            {...register(field.name, field.validation)}
            placeholder={field.placeholder} margin='dense'
          />
        </FormControl>
      ))}
      <Box mt={2} textAlign={"center"}>
      <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: 'black',
              color: 'white',
              cursor: 'pointer',
              transition: 'transform 0.3s ease-in, background-color 0.3s ease-in',
              '&:hover': {
                transform: 'scale(1.05)',
                backgroundColor: 'darkgray',
              },
            }}
          >
            Submit
          </Button>
      </Box>
    </form>
    </Box>
  );
};
