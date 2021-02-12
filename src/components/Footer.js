import Collapser from './Collapser';

export default function Footer() {
  return (
    <footer>

      <div className="flex flex-col justify-center items-center text-center font-thin">
        <Collapser title="Who is Joshu?" children="He's my dog" />
        <Collapser title="What is Zen?" children="Just sitting" />
        <Collapser title="What is a Koan?" children="Spontaneous enlightenment inducer" />
      </div>


      <div className="font-thin">Created by <a href="http://www.samuelsycamore.com" target="_blank">Sam Sycamore</a>
      </div>
    </footer>
     )

    }