import {
  Button,
  Center,
  Checkbox,
  Container,
  Heading,
  Stack,
  Text,
  Box,
} from "@chakra-ui/react";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";

const TestContainer = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm();

  const [typeCounter, setTypeCounter] = useState([0, 0, 0, 0, 0]);
  const [maxCount, setMaxCount] = useState(0);

  const onSubmit = (data) => {
    let ctr = [0, 0, 0, 0, 0];
    for (const [key, value] of Object.entries(data)) {
      if (value) ctr[Number(key.replace("input", "")) % 5] += 1;
    }
    setMaxCount(Math.max(...ctr));
    setTypeCounter(ctr);
  };

  const testQuestions = [
    "1. I don’t really set goals or next steps for myself",
    "2. I feel obligated to return a favor if someone does a favor for me",
    "3. I often complain about my responsibilities",
    "4. I often have doubts about God",
    "5. I depend on God through prayer, especially when I don’t want to obey",
    "6. I usually have extreme motivation levels (lazy or super committed for a short time)",
    "7. I often obey when I gain something for my own good",
    "8. I often feel like I’m not ready for something",
    "9. I often struggle to submit to authority",
    "10. When I don’t understand why or how to obey, I ask others for help and prayer",
    "11. I’m unaware of whether my life and decisions are aligned with God’s heart",
    "12. I often obey when I know the exact result it will produce",
    "13. I often avoid trying new things",
    "14. I rarely seek feedback/counsel when I make decisions",
    "15. I trust in what God is doing in my life even in situations that are scary for me",
    "16. I usually struggle with following through with my commitments",
    "17. I care a lot about what others think of me",
    "18. I often obey God when it’s convenient time for me",
    "19. I usually don’t like opening up about my next steps so people can’t follow up with me",
    "20. I find people who can keep me accountable to follow through on my commitments",
    "21. I go about my day without a clear purpose or direction",
    "22. I tend to do things that will make people think positively about me",
    "23. I often obey God when nothing else is competing for it",
    "24. I am hesitant to obey unless I feel God showing me a very clear sign",
    "25. I want to honor and please God even when nobody sees or knows",
  ];

  const testResults = [
    {
      header: "Sporadic obedience - inconsistent",
      explanation:
        "You obey God inconsistently and sporadically. You tend to be more reactive (as opposed to intentionally and proactively) throughout your day without often being mindful of how your actions are aligned with God's heart. Your awareness of God's heart for you (and how He wants you to obey) is low. You may not often know or seek to know  what the Bible says about how God wants you to live your life. You don't tend to proactively look for ways to obey God throughout your daily life, nor does your life tend to reflect that.",
    },
    {
      header: "Self-centered obedience – “whatever is good for me”",
      explanation:
        "You obey God only when it is good for you, either to earn something from God or to gain things from people. For example, you would obey God if it would cause people to like you more, or if it is aligned with what you desire already. You tend to be narcissistic and self glorifying. The motivation to obey is to satisfy your own desires or sense of self. You may also struggle with self sufficiency.",
    },
    {
      header: "Selective obedience – “only those things that are easy”",
      explanation:
        "You obey God only when it is convenient for you or when it doesn’t require you to make difficult sacrifices. You may struggle with insecurity or even sometimes finding yourself in a victim mentality with the things God might be speaking to you about. You tend to be lazy or struggle with the idol of comfort because you are self-focused, which causes you not to be able to obey God fully because you choose to pursue what is easy for yourself.",
    },
    {
      header: "Stipulated obedience – “only do things if God says”",
      explanation:
        "You tend to be proud and unwilling to take people’s advice. You obey God only if He shows you a sign or closes certain doors for you, and you may even demand Him to show you a clear sign, even though people or the Bible has told you otherwise. You tend to be skeptical or stubborn about the things that you want. On the flip side, you may also have low faith in God and are unwilling to try new things because you don’t want to be disappointed.",
    },
    {
      header: "Surrendered obedience – “I obey because I trust in God”",
      explanation:
        "You are trying your best to trust and obey God because you love Him. Although it might not always be easy, you are proactively wanting to seek God’s heart for your life and find ways to obey Him by faith. Your life reflects not a perfect person but someone who struggles but desires to obey God more than anything. You know that you might not understand all the details of how God is working, but you are surrendered and wanting to obey Him regardless.",
    },
  ];

  return (
    <Container maxW="container.md">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack direction="column" spacing="7">
          <Stack direction="column">
            <Text fontWeight="bold">
              Tick down scenarios that you strongly relate to:
            </Text>
            {testQuestions.map((text, index) => (
              <Controller
                control={control}
                name={"input" + index}
                key={"input" + index}
                defaultValue={false}
                render={({ field: { onChange, value, ref } }) => (
                  <Checkbox onChange={onChange} ref={ref} isChecked={value}>
                    {text}
                  </Checkbox>
                )}
              />
            ))}
          </Stack>
          <Center>
            <Button w="12em" type="submit">
              Submit
            </Button>
          </Center>
          {maxCount > 0 && (
            <Stack direction="column" spacing="3">
              <Heading textAlign="center">Your Test Results</Heading>
              <Text>Your obedience type matches:</Text>
              {typeCounter.map((value, index) => {
                if (value === maxCount)
                  return (
                    <Box>
                      <Text fontWeight="bold">{testResults[index].header}</Text>
                      <Text fontStyle="italic">{testResults[index].explanation}</Text>
                    </Box>
                  );
              })}
            </Stack>
          )}
        </Stack>
      </form>
    </Container>
  );
};

export default TestContainer;
