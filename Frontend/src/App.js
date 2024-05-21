import React, { useState } from 'react';
import './App.css';
import logo from './assets/logo_kdag.png';
import searchIcon from './assets/searchIcon.svg';
import headingBg from './assets/headingBg.jpg';
import contentIcon from './assets/contentIcon.svg';

function App() {

  const [isLoginHovered, setIsLoginHovered] = useState(false);
  const [isSignupHovered, setIsSignupHovered] = useState(false);

  const handleLoginMouseOver = () => {
    setIsLoginHovered(true);
  };

  const handleLoginMouseOut = () => {
    setIsLoginHovered(false);
  };

  const handleSignupMouseOver = () => {
    setIsSignupHovered(true);
  };

  const handleSignupMouseOut = () => {
    setIsSignupHovered(false);
  };



  const [view, setView] = useState('week'); 

  const handleWeekClick = () => {
    setView('week');
  };

  const handleDayClick = () => {
    setView('day');
  };

  



  return (
    <div className="App">

      <nav>

        <div className="leftnav">
          <img src={logo} alt="logo" />
        </div>


        <div className="rightnav">

          <div className="searchbar">
            <img className='change-my-color' src={searchIcon} alt="" /><input className='input' type="text" placeholder='Search in course'/>
          </div>

          <div className="navbuttons">
            <button className={isLoginHovered ? 'login hovered' : 'login'} onMouseOver={handleLoginMouseOver} onMouseOut={handleLoginMouseOut}>Login</button>
            <button className={isSignupHovered ? 'signup hovered' : 'signup'} onMouseOver={handleSignupMouseOver} onMouseOut={handleSignupMouseOut}>Signup</button>
          </div>

        </div>
      </nav>


      <div className="headingBox">

        <div className="leftHeading">
          <h1>Welcome to the course!</h1>
          <p>"Embark on an exciting journey into the world of Machine Learning, where you'll learn to create intelligent systems capable of making predictions, recognizing patterns, and making data-driven decisions."</p>
        </div>

        <div className="rightHeading"><img src={headingBg} alt="" /></div>


      </div>

      <div className="container">

        <div className="intro"><h4>This roadmap provides a structured and progressive learning path. Adjust the pace based on your background and progress. Good luck with your machine learning journey!</h4>
        </div>


        <div className="weekDays"> 

        <h3>You can organise the course week-wise and day-wise</h3>

        <div className="buttons"> 
        <button className={`weekly ${view === 'week' ? 'active' : ''} ` } onClick={handleWeekClick} >Week-wise</button> 
        <button className={`daily ${view === 'day' ? 'active' : ''}`} onClick={handleDayClick}>Day-wise</button> 
        </div>
       
        </div>

        
        <div className="coursecontents"  >

          <div className="weeks"  style={{ display: view === 'week' ? 'block' : 'none' }}>

           <div className="details">

           <div className="weekName"> <img src={contentIcon} alt="" /> <h3 className='weekNumber'>Week 1 </h3></div>

           <div className="topics"> <p>Fundamentals of Python and Mathematics</p></div>


           </div>
           <div className="details">

           <div className="weekName"> <img src={contentIcon} alt="" /> <h3 className='weekNumber'>Week 2 </h3></div>

           <div className="topics"> <p> Focus on essential libraries (NumPy, Pandas, Matplotlib)</p></div>


           </div>
           <div className="details">

           <div className="weekName"> <img src={contentIcon} alt="" /> <h3 className='weekNumber'>Week 3 </h3></div>

           <div className="topics"> <p>Probability and Statistics</p></div>


           </div>
           <div className="details">

           <div className="weekName"> <img src={contentIcon} alt="" /> <h3 className='weekNumber'>Week 4 </h3></div>

           <div className="topics"> <p>Linear algebra essentials</p></div>


           </div>
           <div className="details">

           <div className="weekName"> <img src={contentIcon} alt="" /> <h3 className='weekNumber'>Week 5 </h3></div>

           <div className="topics"> <p>Introduction to Machine Learning</p></div>


           </div>
           <div className="details">

           <div className="weekName"> <img src={contentIcon} alt="" /> <h3 className='weekNumber'>Week 6 </h3></div>

           <div className="topics"> <p>Practical implementation of basic algorithms</p></div>


           </div>
           <div className="details">

           <div className="weekName"> <img src={contentIcon} alt="" /> <h3 className='weekNumber'>Week 7 </h3></div>

           <div className="topics"> <p>Supervised Learning Algorithms</p></div>


           </div>
           <div className="details">

           <div className="weekName"> <img src={contentIcon} alt="" /> <h3 className='weekNumber'>Week 8 </h3></div>

           <div className="topics"> <p>Hands-on practice</p></div>


           </div>
           <div className="details">

           <div className="weekName"> <img src={contentIcon} alt="" /> <h3 className='weekNumber'>Week 9 </h3></div>

           <div className="topics"> <p>Unsupervised Learning</p></div>


           </div>
           <div className="details">

           <div className="weekName"> <img src={contentIcon} alt="" /> <h3 className='weekNumber'>Week 10 </h3></div>

           <div className="topics"> <p>Dimensionality reduction techniques</p></div>


           </div>
           <div className="details">

           <div className="weekName"> <img src={contentIcon} alt="" /> <h3 className='weekNumber'>Week 11 </h3></div>

           <div className="topics"> <p>Advanced Topics in Machine Learning</p></div>


           </div>
           <div className="details">

           <div className="weekName"> <img src={contentIcon} alt="" /> <h3 className='weekNumber'>Week 12 </h3></div>

           <div className="topics"> <p>Deep learning introduction</p></div>


           </div>
           <div className="details">

           <div className="weekName"> <img src={contentIcon} alt="" /> <h3 className='weekNumber'>Week 13 </h3></div>

           <div className="topics"> <p>Model Evaluation and Optimization</p></div>


           </div>
           <div className="details">

           <div className="weekName"> <img src={contentIcon} alt="" /> <h3 className='weekNumber'>Week 14 </h3></div>

           <div className="topics"> <p>Practical application</p></div>


           </div>
           <div className="details">

           <div className="weekName"> <img src={contentIcon} alt="" /> <h3 className='weekNumber'>Week 15 </h3></div>

           <div className="topics"> <p>Specialized Areas </p></div>


           </div>
           <div className="details">

           <div className="weekName"> <img src={contentIcon} alt="" /> <h3 className='weekNumber'>Week 16 </h3></div>

           <div className="topics"> <p>Capstone project</p></div>


           </div>


          </div>




          <div className="days"  style={{ display: view === 'day' ? 'block' : 'none' }}>


          <p className="weekTracker">Week 1 </p>
          <div className="details">
            
            <div className="weekName"> <img src={contentIcon} alt="" /> <h3 className='weekNumber'>Day 1-2 </h3></div>

          <div className="topics"> <p> Install Python and set up the development environment (Jupyter Notebook, Anaconda)</p> </div>
          
          </div>
         
          <div className="details">
            
            <div className="weekName"> <img src={contentIcon} alt="" /> <h3 className='weekNumber'>Day 3-7 </h3></div>

          <div className="topics"> <p> Review Python basics (variables, data types, control structures, functions).</p> </div>
          
          </div>
          <p className="weekTracker">Week 2 </p>
          <div className="details">
            
            <div className="weekName"> <img src={contentIcon} alt="" /> <h3 className='weekNumber'>Day 1-2 </h3></div>

          <div className="topics"> <p> Learn NumPy for numerical computations.</p> </div>
          
          </div>
          
          <div className="details">
            
            <div className="weekName"> <img src={contentIcon} alt="" /> <h3 className='weekNumber'>Day 3-4 </h3></div>

          <div className="topics"> <p> Learn Pandas for data manipulation.</p> </div>
          
          </div>

          <div className="details">
            
            <div className="weekName"> <img src={contentIcon} alt="" /> <h3 className='weekNumber'>Day 5-6 </h3></div>

          <div className="topics"> <p> Learn Matplotlib for data visualization.</p> </div>
          
          </div>
        
          <div className="details">
            
            <div className="weekName"> <img src={contentIcon} alt="" /> <h3 className='weekNumber'>Day 7 </h3></div>

          <div className="topics"> <p> Practice with small projects integrating all three libraries.</p> </div>
          
          </div>
          <p className="weekTracker">Week 3 </p>
          <div className="details">
            
            <div className="weekName"> <img src={contentIcon} alt="" /> <h3 className='weekNumber'>Day 1-3 </h3></div>

          <div className="topics"> <p>Basics of probability (probability distributions, Bayes' theorem).</p> </div>
          
          </div>
        
          <div className="details">
            
            <div className="weekName"> <img src={contentIcon} alt="" /> <h3 className='weekNumber'>Day 4-7 </h3></div>

          <div className="topics"> <p> Basics of statistics (mean, median, mode, variance, standard deviation).</p> </div>
          
          </div>
          <p className="weekTracker">Week 4 </p>
          <div className="details">
            
            <div className="weekName"> <img src={contentIcon} alt="" /> <h3 className='weekNumber'>Day 1-3 </h3></div>

          <div className="topics"> <p> Learn about vectors and matrices.</p> </div>
          
          </div>
       
          <div className="details">
            
            <div className="weekName"> <img src={contentIcon} alt="" /> <h3 className='weekNumber'>Day 4-5 </h3></div>

          <div className="topics"> <p> Operations on matrices (addition, multiplication, inversion).</p> </div>
          
          </div>

          <div className="details">
            
            <div className="weekName"> <img src={contentIcon} alt="" /> <h3 className='weekNumber'>Day 6-7 </h3></div>

          <div className="topics"> <p> Eigenvalues and eigenvectors.</p> </div>
          
          </div>
          <p className="weekTracker">Week 5 </p>
          <div className="details">
            
            <div className="weekName"> <img src={contentIcon} alt="" /> <h3 className='weekNumber'>Day 1-2 </h3></div>

          <div className="topics"> <p> Overview of machine learning (types, applications, popular algorithms).</p> </div>
          
          </div>
         
          <div className="details">
            
            <div className="weekName"> <img src={contentIcon} alt="" /> <h3 className='weekNumber'>Day 3-7 </h3></div>

          <div className="topics"> <p>  Introduction to supervised learning (linear regression, logistic regression).</p> </div>
          
          </div>
          <p className="weekTracker">Week 6 </p>
          <div className="details">
            
            <div className="weekName"> <img src={contentIcon} alt="" /> <h3 className='weekNumber'>Day 1-2 </h3></div>

          <div className="topics"> <p> Implement linear regression in Python.</p> </div>
          
          </div>

          <div className="details">
            
            <div className="weekName"> <img src={contentIcon} alt="" /> <h3 className='weekNumber'>Day 3-4 </h3></div>

          <div className="topics"> <p>  Implement logistic regression in Python.</p> </div>
          
          </div>

          <div className="details">
            
            <div className="weekName"> <img src={contentIcon} alt="" /> <h3 className='weekNumber'>Day 5-7 </h3></div>

          <div className="topics"> <p>  Introduction to scikit-learn and its functionalities.</p> </div>
          
          </div>
          <p className="weekTracker">Week 7 </p>
          <div className="details">
            
            <div className="weekName"> <img src={contentIcon} alt="" /> <h3 className='weekNumber'>Day 1-2 </h3></div>

          <div className="topics"> <p> Decision trees and random forests.</p> </div>
          
          </div>

          <div className="details">
            
            <div className="weekName"> <img src={contentIcon} alt="" /> <h3 className='weekNumber'>Day 3-4 </h3></div>

          <div className="topics"> <p> Support vector machines.</p> </div>
          
          </div>

          <div className="details">
            
            <div className="weekName"> <img src={contentIcon} alt="" /> <h3 className='weekNumber'>Day 5-7 </h3></div>

          <div className="topics"> <p> K-nearest neighbors.</p> </div>
          
          </div>
          <p className="weekTracker">Week 8 </p>
          <div className="details">
            
            <div className="weekName"> <img src={contentIcon} alt="" /> <h3 className='weekNumber'>Day 1-2 </h3></div>

          <div className="topics"> <p> Work on a small project using decision trees and random forests.</p> </div>
          
          </div>

          <div className="details">
            
            <div className="weekName"> <img src={contentIcon} alt="" /> <h3 className='weekNumber'>Day 3-4 </h3></div>

          <div className="topics"> <p> Experiment with SVM on different datasets.</p> </div>
          
          </div>

          <div className="details">
            
            <div className="weekName"> <img src={contentIcon} alt="" /> <h3 className='weekNumber'>Day 5-7 </h3></div>

          <div className="topics"> <p> Apply KNN to a classification problem.</p> </div>
          
          </div>
          <p className="weekTracker">Week 9 </p>
          <div className="details">
            
            <div className="weekName"> <img src={contentIcon} alt="" /> <h3 className='weekNumber'>Day 1-3 </h3></div>

          <div className="topics"> <p> K-means clustering.</p> </div>
          
          </div>

          <div className="details">
            
            <div className="weekName"> <img src={contentIcon} alt="" /> <h3 className='weekNumber'>Day 4-7 </h3></div>

          <div className="topics"> <p> Hierarchical clustering.</p> </div>
          
          </div>

         
          <p className="weekTracker">Week 10 </p>
          <div className="details">
            
            <div className="weekName"> <img src={contentIcon} alt="" /> <h3 className='weekNumber'>Day 1-2 </h3></div>

          <div className="topics"> <p> Principal Component Analysis (PCA).</p> </div>
          
          </div>

          <div className="details">
            
            <div className="weekName"> <img src={contentIcon} alt="" /> <h3 className='weekNumber'>Day 3-4 </h3></div>

          <div className="topics"> <p> t-SNE.</p> </div>
          
          </div>

          <div className="details">
            
            <div className="weekName"> <img src={contentIcon} alt="" /> <h3 className='weekNumber'>Day 5-7 </h3></div>

          <div className="topics"> <p>  Implement clustering and PCA on real-world datasets.</p> </div>
          
          </div>
          <p className="weekTracker">Week 11 </p>
          <div className="details">
            
            <div className="weekName"> <img src={contentIcon} alt="" /> <h3 className='weekNumber'>Day 1-3 </h3></div>

          <div className="topics"> <p> Ensemble methods (boosting, bagging).</p> </div>
          
          </div>

          <div className="details">
            
            <div className="weekName"> <img src={contentIcon} alt="" /> <h3 className='weekNumber'>Day 4-7 </h3></div>

          <div className="topics"> <p> Neural networks basics (perceptron, multi-layer perceptron).</p> </div>
          
          </div>

          
          <p className="weekTracker">Week 12 </p>
          <div className="details">
            
            <div className="weekName"> <img src={contentIcon} alt="" /> <h3 className='weekNumber'>Day 1-2 </h3></div>

          <div className="topics"> <p> Introduction to TensorFlow/Keras.</p> </div>
          
          </div>

          <div className="details">
            
            <div className="weekName"> <img src={contentIcon} alt="" /> <h3 className='weekNumber'>Day 3-4 </h3></div>

          <div className="topics"> <p> Build a simple neural network.</p> </div>
          
          </div>

          <div className="details">
            
            <div className="weekName"> <img src={contentIcon} alt="" /> <h3 className='weekNumber'>Day 5-7 </h3></div>

          <div className="topics"> <p> Train and evaluate the neural network on a dataset.</p> </div>
          
          </div>
          <p className="weekTracker">Week 13 </p>
          <div className="details">
            
            <div className="weekName"> <img src={contentIcon} alt="" /> <h3 className='weekNumber'>Day 1-3 </h3></div>

          <div className="topics"> <p> Model evaluation techniques (cross-validation, confusion matrix, precision, recall).</p> </div>
          
          </div>

          <div className="details">
            
            <div className="weekName"> <img src={contentIcon} alt="" /> <h3 className='weekNumber'>Day 4-7 </h3></div>

          <div className="topics"> <p> Hyperparameter tuning (grid search, random search).</p> </div>
          
          </div>

        
          <p className="weekTracker">Week 14 </p>
          <div className="details">
            
            <div className="weekName"> <img src={contentIcon} alt="" /> <h3 className='weekNumber'>Day 1-3 </h3></div>

          <div className="topics"> <p> Apply evaluation techniques to previous projects.</p> </div>
          
          </div>

          <div className="details">
            
            <div className="weekName"> <img src={contentIcon} alt="" /> <h3 className='weekNumber'>Day 4-7 </h3></div>

          <div className="topics"> <p> Optimize models using hyperparameter tuning.</p> </div>
          
          </div>

         
          <p className="weekTracker">Week 15 </p>
          <div className="details">
            
            <div className="weekName"> <img src={contentIcon} alt="" /> <h3 className='weekNumber'>Day 1-3 </h3></div>

          <div className="topics"> <p>Introduction to natural language processing (NLP).</p> </div>
          
          </div>

          <div className="details">
            
            <div className="weekName"> <img src={contentIcon} alt="" /> <h3 className='weekNumber'>Day 4-7 </h3></div>

          <div className="topics"> <p> Basics of computer vision.</p> </div>
          
          </div>

          <p className="weekTracker">Week 16 </p>
          <div className="details">
            
            <div className="weekName"> <img src={contentIcon} alt="" /> <h3 className='weekNumber'>Day 1-7 </h3></div>

          <div className="topics"> <p> Start and complete a capstone project that integrates multiple aspects of what you have learned (data preprocessing, feature engineering, model building, evaluation, and optimization).</p> </div>
          
          </div>



          </div>


        </div>


      </div>

    

    </div>
  );
}

export default App;


