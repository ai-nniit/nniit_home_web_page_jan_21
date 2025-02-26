import { SECTIONS } from '../section';

function TableOfContents({ activeSection }) {
  return (
    <div className="col-span-3 bg-[#EAF0FD]">
      <div className="sticky top-8">
        <nav className="space-y-1">
          <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
          {SECTIONS.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`block px-3 py-2 text-sm rounded-md transition-colors ${
                activeSection === section.id
                  ? 'bg-blue-100 text-blue-700 font-medium'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {section.title}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default TableOfContents;