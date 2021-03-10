 <TextPassage>
    <p>A text passage contains arbitrary text that might come from a CMS. It should live within a container that caps the line length of the text to avoid a straining reading experience.</p>
 </TextPassage>

<Button onClick={() => console.log("clicked!!")} />
<Button isSecondary text="Secondary Button" />

<PrimaryNav
listItems={[
{
"href": "#",
"text": "Nav Item 1"
},
{
"href": "#",
"text": "Nav Item 2"
},
{
"href": "#",
"text": "Nav Item 3"
},
{
"href": "#",
"text": "Nav Item 4"
}
]}
/>

import logoimg from './images/fpo-120x60.png'
<Logo href="http://bradfrost.com" src={logoimg} alt="Company Name" />

<InlineForm
        method="post"
        action="http://google.com"
        id="demo-form-id"
        placeholder="Placeholder"
        cta="Action"
/>

<Header />

<Card>
        This is the card body.
      </Card>
      <Card theme="dark" title="Dark Card Title" description="This is the card description">
        This is the card body.
</Card>

<CardList listItems={[
{
"title": "Squeeze Its",
"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
},
{
"title": "Card Title",
"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
},
{
"title": "Hugs",
"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
},
{
"href": "http://google.com",
"title": "Mondo",
"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
}
]} />

<Footer>
    Hello Footer
</Footer>

import heroImg from './images/fpo-1200x650.png'
<Hero heroimgsrc={heroImg} heroimgalt="Alt Text" title="Hero Title" description="This is the hero description">
Hello Hero
</Hero>

<Section title="Section Title" description="This is a description of what the section is">
        This is the section body, where you can put any content or include other components.
      </Section>

<Label />

<Field>
   <div className='fpo'>Field</div>
</Field>
