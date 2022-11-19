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

interface Props {
  etherRate: number;
  bill: number;
}

export const Result: React.FC<Props> = ({etherRate, bill}) => {
  if (bill === 0) {
    return null;
  }

  return (
    <SlideFade in>
      <Card bg="gray.300">
        <CardBody>
          <Stack>
            <Stat>
              <StatLabel>ETH/JPY</StatLabel>
              <StatNumber>￥{etherRate.toLocaleString()}</StatNumber>
              <StatHelpText>
                {dayjs().format('YYYY/MM/DD HH:mm:ss')}
              </StatHelpText>
            </Stat>

            <Stack direction="row" align="center">
              <Text fontWeight="bold" fontSize="2xl">
                {bill.toFixed(6)}ether
              </Text>
              <Text>/ 1人</Text>
            </Stack>
          </Stack>
        </CardBody>
      </Card>
    </SlideFade>
  );
};
