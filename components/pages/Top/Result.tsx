'use client';

import {
  Card,
  CardBody,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  SlideFade,
  Stack,
  Text,
} from '@chakra-ui/react';
import dayjs from 'dayjs';
import {Wallet} from './Wallet';

interface Props {
  ethRate: number;
  bill: number;
}

export const Result: React.FC<Props> = ({ethRate, bill}) => {
  if (bill === 0) {
    return null;
  }

  return (
    <SlideFade in>
      <Card bg="gray.300">
        <CardBody>
          <Stack spacing={4}>
            <Stat>
              <StatLabel color="gray.900">ETH/JPY</StatLabel>
              <StatNumber color="gray.900">
                ￥{ethRate.toLocaleString()}
              </StatNumber>
              <StatHelpText color="gray.900">
                {dayjs().format('YYYY/MM/DD HH:mm:ss')}
              </StatHelpText>
            </Stat>

            <Stack direction="row" align="center">
              <Text fontWeight="bold" fontSize="2xl" color="gray.900">
                {bill.toFixed(6)}ether
              </Text>
              <Text color="gray.900">/ 1人</Text>
            </Stack>

            <Wallet />
          </Stack>
        </CardBody>
      </Card>
    </SlideFade>
  );
};
