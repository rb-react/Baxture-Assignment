"use client";

import {
  Card,
  Text,
  Group,
  Center,
  Avatar,
  ButtonGroup,
  Button,
  Container,
  SimpleGrid,
  Tooltip,
} from "@mantine/core";
import classes from "../app/ArticleCard.module.css";
import "../components/ToggleButtonStyle.css";
import React, { useEffect, useState } from "react";
import Link from "next/link";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

const Info: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data: User[] = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  function handleDelete(no: number) {
    const newList = users.filter((e) => e.id !== no);
    setUsers(newList);
  }

  function followUser(no: number) {
    if (number == 0) {
      setNumber(no);
    } else {
      setNumber(0);
    }
  }

  return (
    <Container fluid className={classes.userCard} mt="lg">
      <SimpleGrid
        cols={{ base: 1, sm: 2, lg: 4 }}
        spacing="md"
        verticalSpacing="sm"
        mt="xs"
      >
        {users.map((user) => (
          <Card withBorder className={classes.card}>
            <Group justify="center" className={classes.footer}>
              <Center>
                <Tooltip
                  arrowOffset={27}
                  arrowSize={6}
                  label={user.name}
                  withArrow
                  position="top"
                  offset={{ mainAxis: 3, crossAxis: -4 }}
                >
                  <a
                    href={`http://${user.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Avatar
                      className={classes.nameCircle}
                      src={`https://api.dicebear.com/7.x/initials/svg?seed=${user.name}`}
                      size={120}
                      radius="xl"
                      alt={user.name}
                      mb="md"
                    />
                  </a>
                </Tooltip>
              </Center>
            </Group>

            <Text className={classes.title} fw={500} component="a">
              {user.name}
              {number == user.id ? (
                <span>
                  &nbsp;
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-star"
                    width={15}
                    height={15}
                    viewBox="0 0 24 18"
                    strokeWidth={2}
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                  </svg>
                </span>
              ) : (
                <span></span>
              )}
            </Text>

            <div>
              <Text className={classes.text} mt="xs" fz="sm" c="dimmed">
                <span className="textSpan" style={{ marginRight: "6px" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-at"
                    width="15"
                    height="15"
                    viewBox="0 4 24 18"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                    <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28" />
                  </svg>
                </span>
                <span style={{ fontSize: "16px" }}>
                  <Link
                    href={`mailto:${user.email}`}
                    style={{
                      textDecoration: "none",
                      color: "#868eb1",
                    }}
                  >
                    {user.email}
                  </Link>
                </span>
              </Text>
            </div>

            <Text className={classes.text} fz="sm" c="dimmed">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-phone-call"
                  width="15"
                  height="15"
                  viewBox="0 0 24 18"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                  <path d="M15 7a2 2 0 0 1 2 2" />
                  <path d="M15 3a6 6 0 0 1 6 6" />
                </svg>
              </span>
              <span style={{ fontSize: "16px" }}>
                &nbsp;
                <Link
                  href={`tel:${user.phone}`}
                  target="_blank"
                  style={{
                    textDecoration: "none",
                    color: "#868eb1",
                  }}
                >
                  {user.phone}
                </Link>
              </span>
            </Text>
            <Text className={classes.text} mb="md" fz="sm" c="dimmed">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-world"
                  width={15}
                  height={15}
                  viewBox="0 2 24 18"
                  strokeWidth={1.7}
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                  <path d="M3.6 9h16.8" />
                  <path d="M3.6 15h16.8" />
                  <path d="M11.5 3a17 17 0 0 0 0 18" />
                  <path d="M12.5 3a17 17 0 0 1 0 18" />
                </svg>
              </span>
              <span style={{ fontSize: "16px" }}>
                &nbsp;
                <a
                  href={`http://${user.website}`}
                  target="_blank"
                  style={{
                    textDecoration: "none",
                    color: "#868eb1",
                  }}
                >
                  {user.website}
                </a>
              </span>
            </Text>

            <Group className={classes.buttonGroup} gap={8} justify="">
              <ButtonGroup className={classes.buttonOuter}>
                <Button
                  id={number == user.id ? `toggle_open` : "toggle_close"}
                  onClick={() => followUser(user.id)}
                >
                  {number == user.id ? (
                    <>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-user-minus"
                          width={24}
                          height={20}
                          viewBox="0 0 24 24"
                          strokeWidth={1.7}
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                          <path d="M6 21v-2a4 4 0 0 1 4 -4h4c.348 0 .686 .045 1.009 .128" />
                          <path d="M16 19h6" />
                        </svg>
                      </span>
                      &nbsp; Unfollow
                    </>
                  ) : (
                    <>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-user-plus"
                          width={24}
                          height={20}
                          viewBox="0 0 24 24"
                          strokeWidth={1.7}
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          color="white"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                          <path d="M16 19h6" />
                          <path d="M19 16v6" />
                          <path d="M6 21v-2a4 4 0 0 1 4 -4h4" />
                        </svg>
                      </span>
                      &nbsp; Follow
                    </>
                  )}
                </Button>
              </ButtonGroup>

              <ButtonGroup className={classes.buttonOuter}>
                <Button
                  className={classes.deleteButton}
                  color="blue"
                  variant="outline"
                  onClick={() => handleDelete(user.id)}
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-trash"
                      width={24}
                      height={18}
                      viewBox="0 0 24 24"
                      strokeWidth={1.7}
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M4 7l16 0" />
                      <path d="M10 11l0 6" />
                      <path d="M14 11l0 6" />
                      <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                      <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                    </svg>
                  </span>
                  &nbsp; Delete
                </Button>
              </ButtonGroup>
            </Group>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Info;
