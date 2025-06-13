import "./main.css";
import { createContext, useContext, useState } from "react";
import { ThemeContext, ThemeProvider } from "./themecontext.jsx";

export default function Main() {
  // const { darktheme, toggleTheme } = useContext(ThemeContext);

  return (
    <div id="main">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sagittis
      ut orci nec sodales. Donec dignissim tortor eget metus mollis, vel gravida
      lectus accumsan. Vestibulum dapibus tortor in massa lacinia tempus. Morbi
      et dolor et ipsum eleifend viverra in a erat. Nam vel rhoncus urna, eu
      finibus justo. Nunc sodales lacinia turpis, vitae viverra erat rutrum
      eget. Phasellus dapibus imperdiet odio, consectetur rutrum velit pharetra
      elementum. Aliquam tempor mauris nec consequat cursus. Nullam mi libero,
      sodales ut ornare at, lobortis ut metus. Cras quis ex non odio vehicula
      elementum et in magna. Phasellus eget ullamcorper orci. Duis in massa
      accumsan, vehicula arcu sit amet, pulvinar mi. Cras massa lorem, facilisis
      a arcu eu, mollis convallis urna. Aliquam semper tristique nunc vel
      placerat. Etiam nec magna ex Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Nullam sagittis ut orci nec sodales. Donec dignissim
      tortor eget metus mollis, vel gravida lectus accumsan. Vestibulum dapibus
      tortor in massa lacinia tempus. Morbi et dolor et ipsum eleifend viverra
      in a erat. Nam vel rhoncus urna, eu finibus justo. Nunc sodales lacinia
      turpis, vitae viverra erat rutrum eget. Phasellus dapibus imperdiet odio,
      consectetur rutrum velit pharetra elementum. Aliquam tempor mauris nec
      consequat cursus. Nullam mi libero, sodales ut ornare at, lobortis ut
      metus. Cras quis ex non odio vehicula elementum et in magna. Phasellus
      eget ullamcorper orci. Duis in massa accumsan, vehicula arcu sit amet,
      pulvinar mi. Cras massa lorem, facilisis a arcu eu, mollis convallis urna.
      Aliquam semper tristique nunc vel placerat. Etiam nec magna ex Lorem ipsum
      dolor sit amet, consectetur adipiscing elit. Nullam sagittis ut orci nec
      sodales. Donec dignissim tortor eget metus mollis, vel gravida lectus
      accumsan. Vestibulum dapibus tortor in massa lacinia tempus. Morbi et
      dolor et ipsum eleifend viverra in a erat. Nam vel rhoncus urna, eu
      finibus justo. Nunc sodales lacinia turpis, vitae viverra erat rutrum
      eget. Phasellus dapibus imperdiet odio, consectetur rutrum velit pharetra
      elementum. Aliquam tempor mauris nec consequat cursus. Nullam mi libero,
      sodales ut ornare at, lobortis ut metus. Cras quis ex non odio vehicula
      elementum et in magna. Phasellus eget ullamcorper orci. Duis in massa
      accumsan, vehicula arcu sit amet, pulvinar mi. Cras massa lorem, facilisis
      a arcu eu, mollis convallis urna. Aliquam semper tristique nunc vel
      placerat. Etiam nec magna ex Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Nullam sagittis ut orci nec sodales. Donec dignissim
      tortor eget metus mollis, vel gravida lectus accumsan. Vestibulum dapibus
      tortor in massa lacinia tempus. Morbi et dolor et ipsum eleifend viverra
      in a erat. Nam vel rhoncus urna, eu finibus justo. Nunc sodales lacinia
      turpis, vitae viverra erat rutrum eget. Phasellus dapibus imperdiet odio,
      consectetur rutrum velit pharetra elementum. Aliquam tempor mauris nec
      consequat cursus. Nullam mi libero, sodales ut ornare at, lobortis ut
      metus. Cras quis ex non odio vehicula elementum et in magna. Phasellus
      eget ullamcorper orci. Duis in massa accumsan, vehicula arcu sit amet,
      pulvinar mi. Cras massa lorem, facilisis a arcu eu, mollis convallis urna.
      Aliquam semper tristique nunc vel placerat. Etiam nec magna ex Lorem ipsum
      dolor sit amet, consectetur adipiscing elit. Nullam sagittis ut orci nec
      sodales. Donec dignissim tortor eget metus mollis, vel gravida lectus
      accumsan. Vestibulum dapibus tortor in massa lacinia tempus. Morbi et
      dolor et ipsum eleifend viverra in a erat. Nam vel rhoncus urna, eu
      finibus justo. Nunc sodales lacinia turpis, vitae viverra erat rutrum
      eget. Phasellus dapibus imperdiet odio, consectetur rutrum velit pharetra
      elementum. Aliquam tempor mauris nec consequat cursus. Nullam mi libero,
      sodales ut ornare at, lobortis ut metus. Cras quis ex non odio vehicula
      elementum et in magna. Phasellus eget ullamcorper orci. Duis in massa
      accumsan, vehicula arcu sit amet, pulvinar mi. Cras massa lorem, facilisis
      a arcu eu, mollis convallis urna. Aliquam semper tristique nunc vel
      placerat. Etiam nec magna ex Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Nullam sagittis ut orci nec sodales. Donec dignissim
      tortor eget metus mollis, vel gravida lectus accumsan. Vestibulum dapibus
      tortor in massa lacinia tempus. Morbi et dolor et ipsum eleifend viverra
      in a erat. Nam vel rhoncus urna, eu finibus justo. Nunc sodales lacinia
      turpis, vitae viverra erat rutrum eget. Phasellus dapibus imperdiet odio,
      consectetur rutrum velit pharetra elementum. Aliquam tempor mauris nec
      consequat cursus. Nullam mi libero, sodales ut ornare at, lobortis ut
      metus. Cras quis ex non odio vehicula elementum et in magna. Phasellus
      eget ullamcorper orci. Duis in massa accumsan, vehicula arcu sit amet,
      pulvinar mi. Cras massa lorem, facilisis a arcu eu, mollis convallis urna.
      Aliquam semper tristique nunc vel placerat. Etiam nec magna ex Lorem ipsum
      dolor sit amet, consectetur adipiscing elit. Nullam sagittis ut orci nec
      sodales. Donec dignissim tortor eget metus mollis, vel gravida lectus
      accumsan. Vestibulum dapibus tortor in massa lacinia tempus. Morbi et
      dolor et ipsum eleifend viverra in a erat. Nam vel rhoncus urna, eu
      finibus justo. Nunc sodales lacinia turpis, vitae viverra erat rutrum
      eget. Phasellus dapibus imperdiet odio, consectetur rutrum velit pharetra
      elementum. Aliquam tempor mauris nec consequat cursus. Nullam mi libero,
      sodales ut ornare at, lobortis ut metus. Cras quis ex non odio vehicula
      elementum et in magna. Phasellus eget ullamcorper orci. Duis in massa
      accumsan, vehicula arcu sit amet, pulvinar mi. Cras massa lorem, facilisis
      a arcu eu, mollis convallis urna. Aliquam semper tristique nunc vel
      placerat. Etiam nec magna ex Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Nullam sagittis ut orci nec sodales. Donec dignissim
      tortor eget metus mollis, vel gravida lectus accumsan. Vestibulum dapibus
      tortor in massa lacinia tempus. Morbi et dolor et ipsum eleifend viverra
      in a erat. Nam vel rhoncus urna, eu finibus justo. Nunc sodales lacinia
      turpis, vitae viverra erat rutrum eget. Phasellus dapibus imperdiet odio,
      consectetur rutrum velit pharetra elementum. Aliquam tempor mauris nec
      consequat cursus. Nullam mi libero, sodales ut ornare at, lobortis ut
      metus. Cras quis ex non odio vehicula elementum et in magna. Phasellus
      eget ullamcorper orci. Duis in massa accumsan, vehicula arcu sit amet,
      pulvinar mi. Cras massa lorem, facilisis a arcu eu, mollis convallis urna.
      Aliquam semper tristique nunc vel placerat. Etiam nec magna ex Lorem ipsum
      dolor sit amet, consectetur adipiscing elit. Nullam sagittis ut orci nec
      sodales. Donec dignissim tortor eget metus mollis, vel gravida lectus
      accumsan. Vestibulum dapibus tortor in massa lacinia tempus. Morbi et
      dolor et ipsum eleifend viverra in a erat. Nam vel rhoncus urna, eu
      finibus justo. Nunc sodales lacinia turpis, vitae viverra erat rutrum
      eget. Phasellus dapibus imperdiet odio, consectetur rutrum velit pharetra
      elementum. Aliquam tempor mauris nec consequat cursus. Nullam mi libero,
      sodales ut ornare at, lobortis ut metus. Cras quis ex non odio vehicula
      elementum et in magna. Phasellus eget ullamcorper orci. Duis in massa
      accumsan, vehicula arcu sit amet, pulvinar mi. Cras massa lorem, facilisis
      a arcu eu, mollis convallis urna. Aliquam semper tristique nunc vel
      placerat. Etiam nec magna ex
    </div>
  );
}
