import { h } from "@stencil/core";

export const renderLoaderGetStarted = () => {
  return (
    <div class="rounded-md p-4 w-full mx-auto">
      <div class="animate-pulse flex space-x-4">
        <div class="flex-1 space-y-6 py-1">
          <div class="h-4 w-52 bg-gray-300 rounded"></div>
          <br></br>
          <div class="space-y-3">
            <div class="grid grid-cols-3 gap-4">
              <div class="h-2 bg-gray-300 rounded col-span-2"></div>
              <div class="h-2 bg-gray-300 rounded col-span-1"></div>
            </div>
            <div class="h-2 bg-gray-300 rounded"></div>
            <div class="grid grid-cols-3 gap-4">
              <div class="h-2 bg-gray-300 rounded col-span-2"></div>
              <div class="h-2 bg-gray-300 rounded col-span-1"></div>
            </div>
            <div class="h-2 bg-gray-300 rounded"></div>
            <br></br>
            <div class="grid grid-cols-3 gap-4">
              <div class="h-2 bg-gray-300 rounded col-span-2"></div>
              <div class="h-2 bg-gray-300 rounded col-span-1"></div>
            </div>
            <div class="h-2 bg-gray-300 rounded"></div>
            <div class="grid grid-cols-3 gap-4">
              <div class="h-2 bg-gray-300 rounded col-span-2"></div>
              <div class="h-2 bg-gray-300 rounded col-span-1"></div>
            </div>
            <div class="h-2 bg-gray-300 rounded"></div>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
};

const renderBlock = (block) => {
  return block.text.map((segment) => {
    return (
      <span
        class={`${segment.annotations.bold ? "font-semibold" : ""} 
                  ${segment.annotations.italic ? "italic" : ""}
                  ${segment.annotations.underline ? "underline" : ""}
                  ${
                    segment.annotations.code
                      ? "font-mono bg-gray-200 p-1 rounded-md tracking-wider dark:text-gray-800"
                      : ""
                  }`}
        key={segment.content}
      >
        {segment.link ? (
          <a
            key={segment.content}
            href={segment.link}
            class={`text-primary hover:underline `}
          >
            {segment.content}
          </a>
        ) : (
          <span key={segment.content}>{segment.content}</span>
        )}
      </span>
    );
  });
};

const renderTable = (data) => {
  return (
    <div class="relative overflow-x-auto">
      <table class="w-full text-sm text-left text-gray-700 dark:text-gray-400">
        {data.header ? (
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {data.table[0].cells.map((cell) => {
                return (
                  <th scope="col" class="px-6 py-3">
                    {renderBlock({ text: [cell] })}
                  </th>
                );
              })}
            </tr>
          </thead>
        ) : null}
        <tbody>
          {data.table.map((row, index) => {
            if (data.header && index === 0) return null;
            return (
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                {row.cells.map((cell, index) => {
                  if (index === 0) {
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium dark:text-white whitespace-nowrap"
                    >
                      {renderBlock({ text: [cell] })}
                    </th>;
                  }
                  return (
                    <th scope="col" class="px-6 py-3">
                      {renderBlock({ text: [cell] })}
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export const renderContent = (data) => {
  return data.map((block) => {
    if (block) {
      if (
        block.type == "paragraph" ||
        block.type == "heading_1" ||
        block.type == "heading_2" ||
        block.type == "heading_3" ||
        block.type == "callout" ||
        block.type == "quote" ||
        block.type == "code"
      ) {
        let textStyle = "";
        if (block.type == "heading_1") {
          textStyle = "text-3xl font-bold";
        } else if (block.type == "heading_2") {
          textStyle = "text-2xl font-bold";
        } else if (block.type == "heading_3") {
          textStyle = "text-xl font-semibold";
        } else if (block.type == "callout") {
          textStyle =
            "p-2 hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800 dark:border-gray-800 dark:hover:border-gray-900 hover:shadow-md shadow-lg border rounded-md text-center";
        } else if (block.type == "quote") {
          textStyle = "font-cursive text-2xl";
        } else {
          textStyle = "text-justify";
        }
        return (
          <div
            class={`leading-relaxed my-3 tracking-wide dark:text-gray-200 ${textStyle}`}
            key={block.id}
          >
            {renderBlock(block)}
          </div>
        );
      } else if (block.type == "bulleted_list_item") {
        return (
          <ul
            class={`leading-relaxed my-3 tracking-wide dark:text-gray-200 list-disc`}
            key={block.id}
          >
            <li>{renderBlock(block)}</li>
          </ul>
        );
      } else if (block.type == "divider") {
        return (
          <hr class="my-3 border-t border-gray-300 dark:border-gray-600" />
        );
      } else if (block.type == "table") {
        return renderTable(block);
      } else {
        return (
          <img
            src={block.image}
            alt="Image"
            class="my-10"
            width="auto"
            height="auto"
          ></img>
        );
      }
    }
  });
};

export const renderLoaderAddNewService = () => {
  return (
    <div class="rounded-md p-4 w-full mx-auto">
      <div class="animate-pulse flex space-x-4">
        <div class="flex-1 space-y-6 py-1">
          <div class="flex justify-between">
            <div class="h-4 w-52 bg-gray-300 rounded"></div>
            <div class="h-4 w-52 bg-gray-300 rounded"></div>
          </div>
          <div class="border"></div>
          <div class="flex justify-between">
            <div class="h-4 w-52 bg-gray-300 rounded"></div>
            <div class="h-4 w-52 bg-gray-300 rounded"></div>
          </div>
          <div class="border"></div>
          <div class="flex justify-between">
            <div class="h-4 w-52 bg-gray-300 rounded"></div>
            <div class="h-4 w-52 bg-gray-300 rounded"></div>
          </div>
          <div class="border"></div>
          <div class="flex justify-between">
            <div class="h-4 w-52 bg-gray-300 rounded"></div>
            <div class="h-4 w-52 bg-gray-300 rounded"></div>
          </div>
          <div class="border"></div>
          <div class="flex justify-between">
            <div class="h-4 w-52 bg-gray-300 rounded"></div>
            <div class="h-4 w-52 bg-gray-300 rounded"></div>
          </div>
          <div class="border"></div>
        </div>
      </div>
    </div>
  );
};
