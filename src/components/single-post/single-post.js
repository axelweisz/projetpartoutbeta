import data from "../posts.json";
import Nav from "../nav/nav.js";
import "./single-post.scss";
const topnavbar = new Nav();
topnavbar.render("aprop");

let qstring = window.location.search;
let params = new URLSearchParams(qstring);
let idparam = params.get("postid");
// console.log(idparam);
let allposts = data.posts;
// console.log("allposts: " + allposts);

let singlePost = allposts.filter((post) => {
  console.log("inside singlePost " + post.postId + " = " + idparam + "?");
  return post.postId == idparam;
});

// console.log("SP " + singlePost[0].postId);

let post = require("../../view-templates/post-single.hbs");
const div = document.createElement("div");
//console.log("div " + div);
const body = document.getElementById("wrapper");
let postcontent = post(singlePost[0]);
// console.log("pcontent: " + postcontent);
div.innerHTML = postcontent;
body.appendChild(div);

console.log("wtf");
