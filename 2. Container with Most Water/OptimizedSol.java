class Solution {
    public int maxArea(int[] heights) {
         int maxArea = 0;
         int a = 0;
         int b = heights.length - 1;
        
        while(a < b){
        int length = Math.min(heights[a], heights[b]);
        int width = b - a;
        int area = length * width;
        maxArea = Math.max(maxArea,area);
        
        if (heights[a] <= heights[b])   a++;
        else  b--;
        
        }
        return maxArea;
    }
}