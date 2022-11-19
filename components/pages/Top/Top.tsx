'use client';

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Stack,
} from '@chakra-ui/react';
import {useFormik} from 'formik';
import {useCallback, useState} from 'react';
import {Result} from './Result';

export const Top: React.FC = () => {
  const formatValue = useCallback((value: string) => '￥' + value, []);
  const [rate, setRate] = useState(0);
  const [bill, setBill] = useState(0);

  const fetchEtherRate = useCallback(async () => {
    const response = await fetch(
      'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=JPY'
    );
    const rate = await response.json();

    return rate.JPY;
  }, []);

  const formik = useFormik({
    initialValues: {
      value: '0',
      people: 2,
    },
    onSubmit: async ({value, people}) => {
      const parsed = Number(value.replace(/,/g, ''));
      const etherRate = await fetchEtherRate();
      setRate(etherRate);

      const ether = parsed / etherRate;

      setBill(ether / people);
    },
  });

  const handleValueChange = useCallback(
    (value: string) => {
      const v = value.replace(/￥/, '');
      formik.setFieldValue('value', Number(v).toLocaleString());
    },
    [formik]
  );

  const handlePeopleChange = useCallback(
    (value: string) => {
      formik.setFieldValue('people', value);
    },
    [formik]
  );
  return (
    <Box>
      <form noValidate onSubmit={formik.handleSubmit}>
        <Stack spacing={6}>
          <FormControl>
            <FormLabel fontWeight="bold" fontSize="sm">
              合計金額
            </FormLabel>
            <NumberInput
              name="value"
              variant="flushed"
              size="lg"
              value={formatValue(formik.values.value)}
              onChange={handleValueChange}
            >
              <NumberInputField />
            </NumberInput>
          </FormControl>

          <FormControl>
            <FormLabel fontWeight="bold" fontSize="sm">
              人数
            </FormLabel>
            <NumberInput
              name="people"
              variant="unstyled"
              size="lg"
              min={2}
              value={formik.values.people}
              onChange={handlePeopleChange}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper bg="whiteAlpha.900" color="gray.900" />
                <NumberDecrementStepper bg="whiteAlpha.900" color="gray.900" />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>

          <Button type="submit" colorScheme="teal" size="lg">
            計算
          </Button>
        </Stack>
      </form>

      <Box my={4}>
        <Result ethRate={rate} bill={bill} />
      </Box>
    </Box>
  );
};
