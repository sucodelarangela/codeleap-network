<div id='top'>

# CodeLeap Network

</div>

## 🔎 Overview

**CodeLeap Network** is an application that performs CRUD functions and it was developed as a code test for a **Junior Frontend** position at [**CodeLeap**](https://codeleap.co.uk/).

The design of this application is available [in this link.](https://www.figma.com/file/0OQWLQmU14SF2cDhHPJ2sx/CodeLeap-Frontend-Test?node-id=0:1)

<!-- prettier-ignore -->
| 🪧 Project Info |  |
| ------------- | - |
| ✨ Name | **CodeLeap Network** |
| 🏷️ Technologies | React, JavaScript, Redux, Axios, CSS, Mantine |
| 🚀 Deploy | **https://codeleap-network-zeta.vercel.app/** |
| 🔥 Challenge | [**Design**](https://www.figma.com/file/0OQWLQmU14SF2cDhHPJ2sx/CodeLeap-Frontend-Test?node-id=0:1) |

This application was developed with:

<div>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/axios-ffffff?style=for-the-badge&logo=axios&logoColor=5A29E4">
  <img src="https://img.shields.io/badge/redux-ffffff?style=for-the-badge&logo=redux&logoColor=764ABC">
</div>

## 📝 Technical decisions

According to **CodeLeap**, the candidates are assessed according to many points, but one that was enphasized on the application form and on the Figma design was **how quickly the candidates deliver the results once started**.

Based on the stated above, here I discuss my decisions:

### **Vite** and **JavaScript**

Using `create-react-app` is not advisable according to React's new docs. In my opinion, Vite is faster and configurable, and also [recommended by React docs](https://react.dev/learn/add-react-to-an-existing-project#step-1-set-up-a-modular-javascript-environment). Using a framework like **Next.js** would not be necessary in a single application like this. And **TypeScript** would demand more time to type and check everything correctly, that is why I used **JavaScript** instead.

> If you wish to see one of my **Vite + TypeScript** projects, visit [**CodeChella's repo.**](https://github.com/sucodelarangela/codechella)

### **CSS Modules**

Standard CSS is already available with **Vite**, so I decided to stick with it, since it's my second preferred styling method (my first choice tends to be **Sass** or **styled-components**). Since we don't have a lot of style duplication in this project, my productivity would be the practically the same.

> My **CodeChella** project mentioned above was also developed with **styled-components**. In case tou wish to see some of my **Sass** knowledge, please visit [**Empbank's repo.**](https://github.com/sucodelarangela/empbank)

### **Axios**

Axios is simpler than `fetch api`, it requires less code to do the same thing. It is a lib that I enjoy very much and it makes working faster.

## ✅ Bonus points

For the purpose of gaining bonus points, I have made the application **responsive for mobile devices**, which is something I find really important. Normally, I start coding with the `mobile-first` methodology, but since the Figma design was focused on desktop devices, I had to focus on the deliver.

I have also created a simple **login/logout** system based on `localStorage` and **Redux**. Since authentication was not a requirement for this project, I did not invested any time on back-end authentication. Otherwise, I would have used Firebase as an option.

> If you wish to see a project with Firebase authentication, visit my [**CodeShare's repo**](https://github.com/sucodelarangela/codeshare)

There is a **pagination** navigator on the bottom of the page, loading 10 posts per page. The **pagination** was developed with a components library called [**Mantine**](https://mantine.dev/). Using this component with Mantine saved me time to focus on other functionalities and UI. This library was not used in any other part of the application, since I was aiming to pixel-perfect development of the proposed design.

Also, for better user experience, I have added a **Reload Feed** button so the user can update the list of posts and go back to page no.1.

## 💪 Difficulties overcome

It was the first time I used **Redux** in a project. Previously I have developed with React's **Context API** and this week I had an experience with **Recoil**, which I found very pleasant and easy to work with. Because of that, researching and studying how to apply **Redux** to the project was the most time-consuming activity during the development of the application.

## 📈 Things to improve

These are things that I would have done if time was not a prime factor for this deliver:

- Convert all JavaScript to TypeScript for a more trustable code;
- Use Sass or styled-components to try and improve styles.

Nevertheless, I believe I delivered a very well developed and responsive interface with all functionalities working fine, which is a great accomplishment when considering I have spent less than a day to finish the application.

<a href='#top'>🔼 Back to top</a>

---

Developed with 🧡 by [@sucodelarangela 🍊](https://angelacaldas.vercel.app)
