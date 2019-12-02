import { ListItemText } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "../src/Link";

const logs = [
  {
    avatarUrl: "avatar.jpg",
    primaryText:
      "エンジニアリングマネージャ/プロダクトマネージャのための知識体系と読書ガイド",
    secondaryText: "devilune 5分前"
  },
  {
    avatarUrl: "avatar.jpg",
    primaryText: "いつものように本番作業してたはずなのに",
    secondaryText: "devilune 30分前"
  },
  {
    avatarUrl: "avatar.jpg",
    primaryText: "ようこそdotfilesの世界へ",
    secondaryText: "devilune 3時間前"
  },
  {
    avatarUrl: "avatar.jpg",
    primaryText:
      "GitHubのポップアップメニューはdetailsタグと:beforeが使われててクレバーだった",
    secondaryText: "devilune 3時間前"
  },
  {
    avatarUrl: "avatar.jpg",
    primaryText: "Flutterをプロダクション導入しました。",
    secondaryText: "devilune 8時間前"
  },
  {
    avatarUrl: "avatar.jpg",
    primaryText: "ワイ「何で子コンポーネントに状態を持たせたらあかんの？」",
    secondaryText: "devilune 12時間前"
  },
  {
    avatarUrl: "avatar.jpg",
    primaryText: "GANを用いた画像異常検知アルゴリズム",
    secondaryText: "devilune 3日前"
  },
  {
    avatarUrl: "avatar.jpg",
    primaryText:
      "【忘年会に向け】オールスター感謝祭的な四択クイズウェブシステムをNuxt.js+Socket.IOで実装してみた",
    secondaryText: "devilune 1年前"
  },
  {
    avatarUrl: "avatar.jpg",
    primaryText:
      "エンジニアリングマネージャ/プロダクトマネージャのための知識体系と読書ガイド2",
    secondaryText: "devilune 5分前"
  },
  {
    avatarUrl: "avatar.jpg",
    primaryText: "いつものように本番作業してたはずなのに2",
    secondaryText: "devilune 30分前"
  },
  {
    avatarUrl: "avatar.jpg",
    primaryText: "ようこそdotfilesの世界へ2",
    secondaryText: "devilune 3時間前"
  },
  {
    avatarUrl: "avatar.jpg",
    primaryText:
      "GitHubのポップアップメニューはdetailsタグと:beforeが使われててクレバーだった2",
    secondaryText: "devilune 3時間前"
  },
  {
    avatarUrl: "avatar.jpg",
    primaryText: "Flutterをプロダクション導入しました。2",
    secondaryText: "devilune 8時間前"
  },
  {
    avatarUrl: "avatar.jpg",
    primaryText: "ワイ「何で子コンポーネントに状態を持たせたらあかんの？」2",
    secondaryText: "devilune 12時間前"
  },
  {
    avatarUrl: "avatar.jpg",
    primaryText: "GANを用いた画像異常検知アルゴリズム2",
    secondaryText: "devilune 3日前"
  },
  {
    avatarUrl: "avatar.jpg",
    primaryText:
      "【忘年会に向け】オールスター感謝祭的な四択クイズウェブシステムをNuxt.js+Socket.IOで実装してみた2",
    secondaryText: "devilune 1年前"
  }
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      marginRight: theme.spacing(1)
    }
  })
);

// noinspection JSUnusedGlobalSymbols
export default function Index() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          新着記事
        </Typography>
        <List
          component="nav"
          // className={classes.root}
          aria-label="mailbox folders"
        >
          <Divider />
          {logs.map(log => (
            <Link href="/about" key={log.primaryText}>
              <div>
                <ListItem dense button>
                  <Avatar src={log.avatarUrl} className={classes.avatar} />
                  <ListItemText
                    primary={log.primaryText}
                    secondary={log.secondaryText}
                  />
                </ListItem>
                <Divider />
              </div>
            </Link>
          ))}
        </List>
      </Box>
    </Container>
  );
}
