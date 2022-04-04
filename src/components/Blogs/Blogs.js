import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blogs'>
            <div className="blog">
                <h3>What are Semantic tags?</h3>
                <p>Semantic tags are those tags whose names indicate the reason and purpose of use. These tags carry meaning that is understandable to everyone. These tags accurately describe the type of content they contain. For example <span className='code'>&lt;div&gt;</span> is a non-semantic tag, no one can understand what it contains. On the other hand <span className='code'>&lt;article&gt;</span> is a semantic tag, we can say that it contains an article.</p>
                <div className='tag-list'>
                    <ul>
                        <li className='code'>&lt;header&gt;</li>
                        <li className='code'>&lt;aside&gt;</li>
                        <li className='code'>&lt;footer&gt;</li>
                    </ul>
                    <ul>
                        <li className='code'>&lt;main&gt;</li>
                        <li className='code'>&lt;section&gt;</li>
                        <li className='code'>&lt;nav&gt;</li>
                    </ul>
                </div>
            </div>

            <div className="blog">
                <h3>inline vs block vs inline-block</h3>
                <p>inline, block and inline-block, these are CSS display property values. Also, HTML elements are divided by these three parts. Such as: Inline Element, Block Element &#38; Inline-block Element.</p>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>inline</th>
                            <th>block</th>
                            <th>inline-block</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Only occupy the width that element requires</td>
                            <td>Occupy the full width</td>
                            <td>Just like inline, occupy the required width</td>
                        </tr>
                        <tr>
                            <td>height &#38; width isn't changeable</td>
                            <td>height &#38; width can be changed</td>
                            <td>height &#38; width can be changed like block</td>
                        </tr>
                        <tr>
                            <td>Space can changed only in left &#38; right side</td>
                            <td>Space can changed in all side</td>
                            <td>Space can changed in all side</td>
                        </tr>
                        <tr>
                            <td>Ex: <span className='code'>&lt;a&gt;</span>, <span className='code'>&lt;b&gt;</span>, <span className='code'>&lt;br&gt;</span>, <span className='code'>&lt;span&gt;</span> etc</td>
                            <td>Ex: <span className='code'>&lt;div&gt;</span>, <span className='code'>&lt;hr&gt;</span>, <span className='code'>&lt;p&gt;</span>, <span className='code'>&lt;nav&gt;</span> etc</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Blogs;