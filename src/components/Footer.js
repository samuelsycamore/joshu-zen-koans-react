import React from 'react';
import Collapser from './Collapser';

export default function Footer() {
  return (
    <footer>

    <div className="links">
        <ul>
          <li><Collapser title="Who is Joshu?" children="He's my dog" /></li>
          <li><Collapser title="What is Zen?" children="Just sitting" /></li>
          <li><Collapser title="What is a Koan?" children="Spontaneous enlightenment inducer" /></li>
        </ul>
      </div>


      Created by <a href="http://www.samuelsycamore.com" target="_blank">Sam Sycamore</a>
    </footer>
     )

    }